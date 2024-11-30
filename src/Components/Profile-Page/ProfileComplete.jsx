import { useEffect, useState } from "react";
import "./ProgressComplete.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProfileComplete = ({ percentageLeft }) => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const navigate = useNavigate()
  useEffect(() => {
    const fill = 100 - percentageLeft;
    setTimeout(() => {
      setFillPercentage(fill);
    }, 100);
  }, [percentageLeft]);

  return (
    <div className="profile-container">
      <h2>Complete your profile</h2>
      <p>
        Let&apos;s go only <span>{percentageLeft}%</span> left to complete your
        profile
      </p>
      <button className="complete-btn" onClick={() => navigate("/edit-profile")}>Complete Profile</button>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${fillPercentage}%` }}
        ></div>
      </div>

    </div>
  );
};

export default ProfileComplete;

ProfileComplete.propTypes = {
  percentageLeft: PropTypes.number.isRequired,
};