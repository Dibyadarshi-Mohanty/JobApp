import { useDispatch, useSelector } from "react-redux"
import "../../Candidate-Pages/Candidate-Profile/CandidateProfilePreview.css"
import { logout } from "../../../redux/actions/user";
import { useNavigate } from "react-router-dom";
import { defaultAvatar } from "../../../constants/data";

export default function CompanyProfilePreview() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logout("interviewer"));
    }
    return (
        <div className='container preview-div'>
            <div className="profile-card">
                <div
                    style={
                        {
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }
                    }
                >
                    <img className="profile-img" src={defaultAvatar} alt="Profile Picture" />
                    {
                        user?.verfied && <span
                            style={
                                {
                                    position: 'absolute',
                                    top: "60%",
                                    right: "30%",
                                    backgroundColor: "green",
                                    color: "white",
                                    padding: "7px",
                                    borderRadius: "100%",
                                    fontSize: "1.2rem",
                                    cursor: "pointer"
                                }
                            }
                            title="Verified"
                        >
                            &#10003;
                        </span>
                    }
                </div>

                <div className="profile-details">
                    <label>Name:</label>
                    <p>
                        {user?.name}
                    </p>

                    <label>Email:</label>
                    <p>{user?.companyEmail}</p>

                    <label>Company Name:</label>
                    <p>{user?.companyName ? user?.companyName : "Not added"}</p>

                    <label>Recuriments:</label>
                    <p>{user?.domainOfRecruitment ? user?.domainOfRecruitment.join(",") : "Not added"}</p>

                </div>

                <div className="profile-buttons">
                    <button className="btn edit" onClick={() => navigate("/edit-profile")}>Edit Profile</button>
                    <button className="btn logout" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div >
    )
}

