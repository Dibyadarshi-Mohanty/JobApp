import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobOptions } from "../../../constants/data.js"
import "./CompanyProfile.css";
import { updateProfile } from "../../../redux/actions/user.js";

const InterviewerProfile = () => {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [filterText, setFilterText] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [formData, setFormData] = useState({
    interviewerName: user?.name || "",
    companyName: user?.companyName || "",
    companyEmail: user?.companyEmail || "",
    domainOfRecruitment: user?.domainOfRecruitment || [],
  });


  const addDomain = (domain) => {
    if (!formData.domainOfRecruitment.includes(domain)) {
      setFormData({ ...formData, domainOfRecruitment: [...formData.domainOfRecruitment, domain] });
    }
    setFilterText("");
    setDropdownVisible(false);
  };

  const removeDomain = (domain) => {
    setFormData({ ...formData, domainOfRecruitment: formData.domainOfRecruitment.filter((d) => d !== domain) });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData, "interviewer"));
  };

  return (
    <div className="profileContainer" style={{ paddingBlock: "50px" }}>
      <form onSubmit={handleSubmit} className="profileForm">
        <div className="form-group">
          <label htmlFor="interviewerName">Name</label>
          <input
            type="text"
            id="interviewerName"
            name="interviewerName"
            value={formData.interviewerName}
            onChange={handleChange}
            placeholder="Enter your name"
            disabled
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyEmail">Company Email</label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            placeholder="Enter company email"
          />
        </div>

        <div className="skills-section">
          <label htmlFor="skills">Domains</label>
          <div className="selected-skills">
            {formData.domainOfRecruitment?.map((domain) => (
              <span key={domain} className="skill-chip">
                {domain}
                <button type="button" onClick={() => removeDomain(domain)} style={{ color: "black" }}>
                  &times;
                </button>
              </span>
            ))}
          </div>
          <div className="skill-input">
            <input
              type="text"
              placeholder="Search and select domains..."
              value={filterText}
              onFocus={() => setDropdownVisible(true)}
              onChange={(e) => setFilterText(e.target.value)}
              onBlur={() => setTimeout(() => setDropdownVisible(false), 300)}
            />
            {isDropdownVisible && (
              <ul className="c-dropdown">
                {jobOptions
                  .filter((domain) =>
                    domain.toLowerCase().includes(filterText.toLowerCase())
                  )
                  .map((domain) => (
                    <li key={domain} onMouseDown={() => addDomain(domain)}>
                      {domain}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        <button type="submit" className="submitButton">
          {
            loading ? "Updating..." : "Update"
          }
        </button>
      </form>
    </div>
  );
};

export default InterviewerProfile;
