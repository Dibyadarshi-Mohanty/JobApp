import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import propTypes from "prop-types";
import "./VideoCall.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../redux/store";

const VideoCall = ({ roomId, userId, role, setIsRoom }) => {
    const navigate = useNavigate();

    const [isRoomReady, setIsRoomReady] = useState(false);
    const [isError, setIsError] = useState(null);
    const [isWaiting, setIsWaiting] = useState(false);
    const [peerConnection, setPeerConnection] = useState(null);
    const [stream, setStream] = useState(null);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isSharingScreen, setIsSharingScreen] = useState(false);

    const videoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const socket = useRef(null);

    useEffect(() => {
        socket.current = io(`${BACKEND_URL}`);

        socket.current.emit("joinRoom", { roomId, userId, role });

        socket.current.on("roomReady", () => {
            setIsRoomReady(true);
            setIsRoom(true);
            setIsWaiting(false);
        });

        socket.current.on("waitingForOther", () => {
            setIsWaiting(true);
        });

        socket.current.on("error", (data) => {
            setIsError(data.message);
        });

        return () => {
            socket.current.disconnect();
        };
    }, [roomId, userId, role]);

    useEffect(() => {
        if (!isRoomReady) return;

        const pc = new RTCPeerConnection();
        setPeerConnection(pc);

        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((userStream) => {
                setStream(userStream);
                if (videoRef.current) videoRef.current.srcObject = userStream;

                userStream.getTracks().forEach((track) => pc.addTrack(track, userStream));

                pc.onicecandidate = (event) => {
                    if (event.candidate) {
                        socket.current.emit("signal", roomId, {
                            type: "ice-candidate",
                            candidate: event.candidate,
                        });
                    }
                };

                pc.ontrack = (event) => {
                    if (remoteVideoRef.current) {
                        remoteVideoRef.current.srcObject = event.streams[0];
                    }
                };

                if (role === "interviewer") {
                    pc.createOffer()
                        .then((offer) => pc.setLocalDescription(offer))
                        .then(() => {
                            socket.current.emit("signal", roomId, pc.localDescription);
                        });
                }
            })
            .catch(() => setIsError("Error accessing camera/microphone."));

        return () => pc.close();
    }, [isRoomReady, roomId, role]);

    useEffect(() => {
        if (!peerConnection) return;

        socket.current.on("signal", (message) => {
            if (message.type === "offer") {
                peerConnection
                    .setRemoteDescription(new RTCSessionDescription(message))
                    .then(() => peerConnection.createAnswer())
                    .then((answer) => peerConnection.setLocalDescription(answer))
                    .then(() => {
                        socket.current.emit("signal", roomId, peerConnection.localDescription);
                    })
                    .catch((error) => console.error("Error handling offer:", error));
            } else if (message.type === "answer") {
                peerConnection
                    .setRemoteDescription(new RTCSessionDescription(message))
                    .catch((error) => console.error("Error handling answer:", error));
            } else if (message.type === "ice-candidate") {
                peerConnection
                    .addIceCandidate(new RTCIceCandidate(message.candidate))
                    .catch((error) => console.error("Error adding ICE candidate:", error));
            }
        });

        return () => socket.current.off("signal");
    }, [peerConnection, roomId]);

    const toggleCamera = () => {
        if (stream) {
            const enabled = !isCameraOn;
            stream.getVideoTracks()[0].enabled = enabled;
            setIsCameraOn(enabled);
        }
    };

    const startScreenShare = () => {
        if (!peerConnection) {
            setIsError("No active peer connection.");
            return;
        }

        if (!isSharingScreen) {
            navigator.mediaDevices
                .getDisplayMedia({ video: true })
                .then((screenStream) => {
                    const videoSender = peerConnection
                        .getSenders()
                        .find((sender) => sender.track && sender.track.kind === "video");

                    if (videoSender) {
                        const screenTrack = screenStream.getVideoTracks()[0];
                        videoSender.replaceTrack(screenTrack);

                        screenTrack.onended = () => {
                            videoSender.replaceTrack(stream.getVideoTracks()[0]);
                            setIsSharingScreen(false);
                        };

                        setIsSharingScreen(true);
                    }
                })
                .catch(() => setIsError("Error sharing screen."));
        } else {
            const videoSender = peerConnection
                .getSenders()
                .find((sender) => sender.track && sender.track.kind === "video");

            if (videoSender && stream) {
                videoSender.replaceTrack(stream.getVideoTracks()[0]);
                setIsSharingScreen(false);
            }
        }
    };

    const disconnectCall = () => {
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
        }

        if (peerConnection) {
            peerConnection.close();
            setPeerConnection(null);
        }

        if (socket.current) {
            socket.current.disconnect();
        }

        setStream(null);
        setIsRoomReady(false);
        setIsRoom(false);
        setIsCameraOn(true);
        setIsSharingScreen(false);

        toast.success("Thanks for using our service!");
        navigate("/");
    };

    return (
        <div className="video-call-container">
            {isError && <div className="error">{isError}</div>}
            {!isRoomReady && !isWaiting && !isError && <div>Joining room...</div>}
            {isWaiting && <div>Waiting for the other to join...</div>}

            {isRoomReady && (
                <div>
                    <h2>Video Call</h2>
                    <div className="video-container">
                        <div className="video-wrapper">
                            <video
                                ref={videoRef}
                                autoPlay
                            />
                            <div className="video-name">
                                {role === "interviewer" ? "Interviewer (You)" : "Candidate (You)"}
                            </div>
                        </div>
                        <div className="video-wrapper">
                            <video
                                ref={remoteVideoRef}
                                autoPlay
                                style={{ border: "2px solid blue" }}
                            />
                            <div className="video-name">
                                {role === "interviewer" ? "Candidate" : "Interviewer"}
                            </div>
                        </div>
                    </div>
                    <div className="controls">
                        <button onClick={toggleCamera}>
                            {isCameraOn ? "Turn Camera Off" : "Turn Camera On"}
                        </button>
                        <button onClick={startScreenShare}>
                            {isSharingScreen ? "Stop Screen Share" : "Share Screen"}
                        </button>
                        <button onClick={disconnectCall}>Disconnect</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoCall;

VideoCall.propTypes = {
    roomId: propTypes.string.isRequired,
    userId: propTypes.string.isRequired,
    role: propTypes.string.isRequired,
    setIsRoom: propTypes.func.isRequired,
};
