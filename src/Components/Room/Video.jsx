import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import propTypes from "prop-types";
import { BACKEND_URL } from "../../redux/store";

const VideoCall = ({ roomId, userId, role, setIsRoom }) => {
  const [isRoomReady, setIsRoomReady] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [peerConnection, setPeerConnection] = useState(null);
  const [stream, setStream] = useState(null);

  const videoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io(`${BACKEND_URL}`);

    socket.current.emit("joinRoom", { roomId, userId, role });

    socket.current.on("roomReady", () => {
      setIsRoomReady(true);
      setIsWaiting(false);
      setIsRoom(true);
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
          console.log("Remote track received:", event.streams[0]);
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
      console.log("Signal received:", message);
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


  return (
    <div>
      {isError && <div className="error">{isError}</div>}
      {!isRoomReady && !isWaiting && !isError && <div>Joining room...</div>}
      {isWaiting && <div>Waiting for the other to join...</div>}

      {isRoomReady && (
        <div>
          <h2>Video Call</h2>
          <video ref={videoRef} autoPlay muted style={{ width: "300px" }} />
          <video ref={remoteVideoRef} autoPlay style={{ width: "300px" }} />
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