import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import propTypes from "prop-types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../redux/store";
import "./Video.css"
const Video = ({ roomId, userId, role, setIsRoom }) => {
  const navigate = useNavigate();
  const [isRoomReady, setIsRoomReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
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

  const handleMuteToggle = () => {
    if (stream) {
      const enabled = !isMuted;
      stream.getAudioTracks()[0].enabled = enabled;
      setIsMuted(enabled);
    }
  };

  return (
    <div className="container-fluid video-conference">
      {isError && <div className="error">{isError}</div>}
      {!isRoomReady && !isWaiting && !isError && <div>Joining room...</div>}
      {isWaiting && <div>Waiting for the other to join...</div>}
      <div className="row vh-100">
        {/* Candidate Video */}
        <div className="col-6 video-window">
          <div className="participant">
            <video
              id="candidateVideo"
              ref={videoRef}
              autoPlay
            ></video>
            <div className="participant-name">
              {role === "interviewer" ? "Interviewer (You)" : "Candidate (You)"}
            </div>
          </div>
        </div>
        {/* Employer Video */}
        <div className="col-6 video-window">
          <div className="participant">
            <video id="employerVideo"
              ref={remoteVideoRef}
              autoPlay
            ></video>
            <div className="participant-name">
              {role === "interviewer" ? "Candidate" : "Interviewer"}
            </div>
          </div>
        </div>
      </div>
      {/* Control Bar */}
      <div className="control-bar d-flex justify-content-center align-items-center">
        <button
          id="muteBtn"
          className={`btn ${isMuted ? "btn-danger" : "btn-secondary"} me-3`}
          title={isMuted ? "Unmute" : "Mute"}
          onClick={handleMuteToggle}
        >
          <i className={`fa ${isMuted ? "fa-microphone-slash" : "fa-microphone"}`}></i>{" "}
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button
          id="cameraBtn"
          className={`btn ${isCameraOn ? "btn-secondary" : "btn-danger"} me-3`}
          title={isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
          onClick={toggleCamera}
        >
          <i className={`fa ${isCameraOn ? "fa-video" : "fa-video-slash"}`}></i>{" "}
          {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
        </button>
        <button
          id="shareBtn"
          className={`btn ${isSharingScreen ? "btn-secondary" : "btn-success"} me-3`}
          title={isSharingScreen ? "Stop Sharing Screen" : "Share Screen"}
          onClick={startScreenShare}
        >
          <i className={`fa ${isSharingScreen ? "fa-xmark" : "fa-desktop"}`}></i>{" "}
          {isSharingScreen ? "Stop Sharing" : "Share Screen"}
        </button>
        <button
          id="leaveBtn"
          className="btn btn-danger"
          title="Leave Meeting"
          onClick={disconnectCall}
        >
          <i className="fa fa-sign-out"></i> Leave
        </button>
      </div>
    </div>
  );
};
export default Video;
Video.propTypes = {
  roomId: propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  setIsRoom: propTypes.func.isRequired,
};
