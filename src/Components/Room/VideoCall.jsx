import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import propTypes from "prop-types";
import "./VideoCall.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VideoCall = ({ roomId, userId, role }) => {
    const navigate = useNavigate();

    const [isRoomReady, setIsRoomReady] = useState(false);
    const [isError, setIsError] = useState(null);
    const [isWaiting, setIsWaiting] = useState(false);
    const [peerConnection, setPeerConnection] = useState(null);
    const [stream, setStream] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isSharingScreen, setIsSharingScreen] = useState(false);

    const videoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const socket = useRef(null);

    useEffect(() => {
        socket.current = io("http://localhost:5000");

        socket.current.emit("joinRoom", { roomId, userId, role });

        socket.current.on("roomReady", () => {
            setIsRoomReady(true);
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

    const toggleMute = () => {
        if (stream) {
            const enabled = !isMuted;
            stream.getAudioTracks()[0].enabled = enabled;
            setIsMuted(!enabled);
        }
    };

    const toggleCamera = () => {
        if (stream) {
            const enabled = !isCameraOn;
            stream.getVideoTracks()[0].enabled = enabled;
            setIsCameraOn(enabled);
        }
    };

    const startScreenShare = () => {
        if (!isSharingScreen) {
            navigator.mediaDevices
                .getDisplayMedia({ video: true })
                .then((screenStream) => {
                    const sender = peerConnection
                        .getSenders()
                        .find((s) => s.track.kind === "video");

                    if (sender) sender.replaceTrack(screenStream.getVideoTracks()[0]);

                    screenStream.getVideoTracks()[0].onended = () => {
                        sender.replaceTrack(stream.getVideoTracks()[0]);
                        setIsSharingScreen(false);
                    };

                    setIsSharingScreen(true);
                })
                .catch(() => setIsError("Error sharing screen."));
        }
    };

    const disconnectCall = () => {
        if (peerConnection) peerConnection.close();
        setIsRoomReady(false);
        socket.current.disconnect();
        toast.success("Thanks for using our service!");
        navigate("/")
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
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            style={{
                                border: isMuted ? "2px solid red" : "2px solid green",
                            }}
                        />
                        <video
                            ref={remoteVideoRef}
                            autoPlay
                            style={{ border: "2px solid blue" }}
                        />
                    </div>
                    <div className="controls">
                        <button onClick={toggleMute}>
                            {isMuted ? "Unmute" : "Mute"}
                        </button>
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
};