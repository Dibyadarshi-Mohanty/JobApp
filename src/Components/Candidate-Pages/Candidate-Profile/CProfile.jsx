import { useState } from "react";
import "./CProfile.css";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { AREA_OF_STUDY, defaultAvatar, experienceOptions } from "../../../constants/data";
import { skillOptions } from "../../../constants/data";
import { updateProfile } from "../../../redux/actions/user";

function CProfile() {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [profilePicture, setProfilePicture] = useState(user?.profilePic?.url || defaultAvatar);
  const [selectedSkills, setSelectedSkills] = useState(user?.skills || []);
  const [filterText, setFilterText] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [formData, setFormData] = useState({
    institutationName: user?.institutationName || "",
    DOB: user?.DOB || "",
    areaOfStudy: user?.areaOfStudy || "",
    yearsOfExperience: user?.yearsOfExperience || 0,
    githubLink: user?.githubLink || "",
    linkedinLink: user?.linkedinLink || "",
    phone: user?.phoneNumber || "",
  });
  const [resume, setResume] = useState(null);
  const [currentPictureFile, setCurrentPictureFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePictureChange = (e) => {
    let file = e.target.files[0];

    if (file && file.size > 5 * 1024 * 1024) {
      return toast.error("File size should be less than 5MB.");
    }

    file = new File([file], "profilePic", { type: file.type });
    setCurrentPictureFile(file);

    const reader = new FileReader();
    reader.onload = () => setProfilePicture(reader.result);
    reader.readAsDataURL(file);
  };

  const handleResumeChange = (e) => {
    let file = e.target.files[0];

    if (file && file.size > 5 * 1024 * 1024) {
      return toast.error("File size should be less than 5MB.");
    }
    file = new File([file], "resume", { type: file.type });
    setResume(file);
  };

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setFilterText("");
    setDropdownVisible(false);
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToRemove));
  };


  const handleSaveChanges = async (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("phoneNumber", user?.phoneNumber || formData.phone);
    data.append("institutationName", formData.institutationName);
    data.append("DOB", formData.DOB);
    if (selectedSkills.length > 0)
      data.append("skills", selectedSkills);
    if (formData.areaOfStudy)
      data.append("areaOfStudy", formData.areaOfStudy);
    data.append("yearsOfExperience", formData.yearsOfExperience);
    data.append("githubLink", formData.githubLink);
    data.append("linkedinLink", formData.linkedinLink);

    if (resume) data.append("files", resume);
    if (currentPictureFile) data.append("files", currentPictureFile);

    dispatch(updateProfile(data, "candidate"));
  };

  console.log(user?.yearsOfExperience)
  return (
    <div className="container profile-containerc">

      <div className="profile-picture-section">
        <h3>Profile Picture</h3>
        <div className="profile-picture">
          <img src={profilePicture} alt="Profile" />
        </div>
        <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
      </div>

      <div className="account-details-section">
        <h3>Account Details</h3>
        <div className="form-partition">
          <form>
            <label htmlFor="institutationName">Institution Name</label>
            <input
              type="text"
              name="institutationName"
              value={formData.institutationName}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="DOB">Date of Birth</label>
            <input
              type="date"
              name="DOB"
              value={
                formData.DOB &&
                new Date(formData.DOB).toISOString().split("T")[0] || ""
              }
              onChange={handleInputChange}
              required
            />

            <label htmlFor="yearsOfExperience">Years of Experience</label>
            <select value={formData.yearsOfExperience}
              onChange={handleInputChange}
              name="yearsOfExperience"
            >
              <option value="">Select your experience</option>
              {
                experienceOptions.map((exp) => (
                  <option key={exp} value={exp}>
                    {exp}+
                  </option>
                ))
              }
            </select>


            <label htmlFor="areaOfStudy">Area of Study</label>
            <select
              name="areaOfStudy"
              value={formData.areaOfStudy}
              onChange={handleInputChange}
            >
              <option value="">Select Area of Study</option>
              {
                AREA_OF_STUDY.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))
              }
            </select>
            <div className="skills-section">
              <label htmlFor="skills">Skills</label>
              <div className="selected-skills">
                {selectedSkills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)}
                      style={{ color: "black" }}>
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              <div className="skill-input">
                <input
                  type="text"
                  placeholder="Search and select skills..."
                  value={filterText}
                  onFocus={() => setDropdownVisible(true)}
                  onChange={(e) => setFilterText(e.target.value)}
                  onBlur={() => setTimeout(() => setDropdownVisible(false), 200)}
                />
                {isDropdownVisible && (
                  <ul className="c-dropdown">
                    {skillOptions
                      .filter((skill) =>
                        skill.toLowerCase().includes(filterText.toLowerCase())
                      )
                      .map((skill) => (
                        <li key={skill} onClick={() => addSkill(skill)}>
                          {skill}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            <label htmlFor="resume">Resume</label>
            <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />

            <label htmlFor="githubLink">GitHub Profile</label>
            <input
              type="url"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleInputChange}
            />

            <label htmlFor="linkedinLink">LinkedIn Profile</label>
            <input
              type="url"
              name="linkedinLink"
              value={formData.linkedinLink}
              onChange={handleInputChange}
            />

            <button type="button" onClick={(e) => handleSaveChanges(e)}
              disabled={loading}
              style={
                {
                  backgroundColor: "#333",
                  color: "white",
                  padding: "14px 20px",
                  margin: "8px 0",
                  border: "none",
                  cursor: loading ? "none" : "pointer",
                  width: "100%",
                  opacity: "0.9",
                  borderRadius: "5px",
                }
              }
            >
              {
                loading ? "Saving..." : "Save Changses"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CProfile;
