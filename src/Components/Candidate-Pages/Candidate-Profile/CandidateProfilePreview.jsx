import { useDispatch, useSelector } from "react-redux"
import "./CandidateProfilePreview.css"
import { logout } from "../../../redux/actions/user";

export default function CandidateProfilePreview() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout("candidate"));
  }
  return (
    <>

      <div className='container preview-div'>
        <div className="profile-card">
          <img className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="Profile Picture" />

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
            <button className="btn edit">Edit Profile</button>
            <button className="btn logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}
