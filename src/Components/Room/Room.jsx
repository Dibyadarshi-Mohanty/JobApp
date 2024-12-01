import { useState } from "react";
import VideoCall from "./VideoCall";
import { useSelector } from "react-redux";

function Room() {
    const { user } = useSelector(state => state.user);
    const [roomId, setRoomId] = useState("");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100%",
            }}
        >
            <h1>
                {
                    user?.role === "interviewer"
                        ? "Join the room to start the interview"
                        : `Best of luck for the interview, ${user?.name}!`
                }

            </h1>
            <div className="form-group">
                <input
                    type="text"
                    id="roomId"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    style={{ width: "300px", border: "1px solid #333" }}
                    placeholder="Enter Room ID"
                />
            </div>
            {
                !roomId
                    ? (
                        <div>
                            <p>Enter a room ID to join a video call.</p>
                        </div>)
                    :
                    <VideoCall roomId={roomId} userId={user?._id} role={user?.role} />
            }
        </div>
    );
}

export default Room

