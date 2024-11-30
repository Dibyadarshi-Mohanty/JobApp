import { useState } from "react";
import "./JobPosting.css";
import { AREA_OF_STUDY as domainOptions, jobOptions as categoryOptions } from "../../../constants/data";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { postJob } from "../../../redux/actions/user";

function JobPosting() {
  const [domain, setDomain] = useState([]);
  const [category, setCategory] = useState();
  const [formData, setFormData] = useState(
    {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      experience: "",
      location: "",
    }
  );

  const dispatch = useDispatch();

  const handleDomainChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue && !domain.includes(selectedValue)) {
      setDomain([...domain, selectedValue]);
    }
  };

  const removeDomain = (item) => {
    setDomain(domain.filter((d) => d !== item));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.startDate || !formData.endDate || !formData.experience || !formData.location || domain.length === 0 || !category) {
      return toast.error("Please fill all the fields.");
    }
    let formWithAdditionalData = {
      title: formData.title,
      description: formData.description,
      startDate: formData.startDate,
      endDate: formData.endDate,
      yearsOfExperience: formData.experience,
      location: formData.location,
      areaOfStudy: domain,
      category: category,
    }
    dispatch(postJob(formWithAdditionalData));
  }

  return (
    <div className="Job-container">
      <div className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-6 JobForm">
          <div className="card job-form-card">
            <h2>Job Posting Form</h2>
            <form>
              <div className="form-group">
                <label htmlFor="job-title">Job Title</label>
                <input type="text" id="job-title" placeholder="Enter job title"
                  value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required />
              </div>

              <div className="form-group">
                <label htmlFor="job-description">Job Description</label>
                <textarea id="job-description" rows="3" placeholder="Enter job description"
                  value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="start-date">Start Date</label>
                  <input type="date" id="start-date"
                    value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="end-date">End Date</label>
                  <input type="date" id="end-date"
                    value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="experience">Years of Experience</label>
                  <select id="experience"
                    value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  >
                    <option value="">Select experience</option>
                    <option value="1">1+ years</option>
                    <option value="3">3+ years</option>
                    <option value="5">5+ years</option>
                    <option value="10">10+ years</option>
                    <option value="15">15+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" placeholder="Enter location"
                    value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="domain">Domain</label>
                <select id="domain" onChange={handleDomainChange}>
                  <option value="">Select domain(s)</option>
                  {domainOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="selected-items">
                  {domain.map((item) => (
                    <span key={item} className="selected-item">
                      {item}
                      <button type="button" onClick={() => removeDomain(item)}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "red",
                          cursor: "pointer"
                        }}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select category(s)</option>
                  {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-actions" onClick={(e) => handleClick(e)}>
                <button type="submit">Post Job</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPosting;
