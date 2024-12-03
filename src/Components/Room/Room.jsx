import { useState } from "react";
// import VideoCall from "./VideoCall";
import { useSelector } from "react-redux";
import Video from "./Video";

function Room() {
    const { user } = useSelector(state => state.user);
    const [roomId, setRoomId] = useState("");
    const [isRoomReady, setIsRoomReady] = useState(false);

    console.log({ isRoomReady })

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
                    !isRoomReady ?
                        user?.role === "interviewer"
                            ? "Join the room to start the interview"
                            : `Best of luck for the interview, ${user?.name}!` : "Room Id"
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
                    <Video roomId={roomId} userId={user?._id} role={user?.role} setIsRoom={setIsRoomReady} />
            }
        </div>
    );
}

export default Room

{/* <VideoCall roomId={roomId} userId={user?._id} role={user?.role} setIsRoom={setIsRoomReady} /> */ }
