import { useDispatch, useSelector } from "react-redux"
import "./CandidateProfilePreview.css"
import { logout } from "../../../redux/actions/user";
import { useNavigate } from "react-router-dom";

export default function CandidateProfilePreview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout("candidate"));
  }
  return (
    <div className='container preview-div'>
      <div className="profile-card">
        <img className="profile-img" src={user?.profilePic.url ? user?.profilePic.url : `https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png`} alt="Profile Picture" />

        <div className="profile-details">
          <label>Name:</label>
          <p>
            {user?.name}
          </p>

          <label>Email:</label>
          <p>{user?.email}</p>

          <label>Phone:</label>
          <p>{user?.phoneNumber ? user?.phoneNumber : "Not added"}</p>

          <label>Domain:</label>
          <p>{user?.areaOfStudy ? user?.areaOfStudy : "Not added"}</p>

          <label>Skills:</label>
          <p>
            {user?.skills.length > 0 ? user?.skills.join(",") : "Not added"}
          </p>
        </div>

        <div className="profile-buttons">
          <button className="btn edit" onClick={() => navigate("/edit-profile")}>Edit Profile</button>
          <button className="btn logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}
