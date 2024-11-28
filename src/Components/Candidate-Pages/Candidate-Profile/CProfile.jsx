import React, { useState } from "react";
import "./CProfile.css";

const SKILLS = [
  "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Ruby", "Go", "Swift",
  "Kotlin", "PHP", "Rust", "Scala", "React", "Angular", "Vue.js", "Next.js",
  "Express.js", "Django", "Flask", "Spring Boot", "Ruby on Rails", "ASP.NET",
  "TensorFlow", "PyTorch", "MongoDB", "MySQL", "PostgreSQL", "SQLite", "Firebase",
  "OracleDB", "Redis", "Cassandra", "AWS", "Azure", "Google Cloud", "Docker",
  "Kubernetes", "CI/CD", "Jenkins", "Ansible", "Terraform", "Git", "GitHub",
  "GitLab", "JIRA", "Postman", "Figma", "Visual Studio Code", "Selenium", "Cypress",
  "Jest", "Mocha", "Chai", "JUnit", "Data Analysis", "Machine Learning",
  "Deep Learning", "Natural Language Processing", "Big Data", "Hadoop", "Spark"
];

function CProfile() {
  const [profilePicture, setProfilePicture] = useState("default-avatar.png");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePicture(reader.result);
      reader.readAsDataURL(file);
    }
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

  const filteredSkills = SKILLS.filter((skill) =>
    skill.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="container profile-container">
      <div className="profile-picture-section">
        <h3>Profile Picture</h3>
        <div className="profile-picture">
          <img id="preview" src={profilePicture} alt="Profile" />
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleProfilePictureChange}
        />
      </div>

      <div className="account-details-section">
        <h3>Account Details</h3>
        <div className="form-partition">
          {/* Form 1 */}
          <form className="form-1">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="institution">Institution Name</label>
            <input
              type="text"
              id="institution"
              placeholder="Enter institution name"
              required
            />

            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" required />

            <label htmlFor="domain">Domain</label>
            <input type="text" id="domain" placeholder="Enter your domain" />

            <label htmlFor="study">Area of Study</label>
            <select id="study">
              <option value="graduate">Graduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="matriculation">Matriculation</option>
            </select>
          </form>

          {/* Form 2 */}
          <form className="form-2">
            <label htmlFor="skills">Skills</label>
            <div className="selected-skills">
              {selectedSkills.map((skill) => (
                <span key={skill}>
                  {skill}
                  <button onClick={() => removeSkill(skill)}>×</button>
                </span>
              ))}
            </div>

            <div className="skill-container">
              <input
                type="text"
                id="myInput"
                placeholder="Search and select skills..."
                value={filterText}
                onFocus={() => setDropdownVisible(true)}
                onChange={(e) => setFilterText(e.target.value)}
              />
              {isDropdownVisible && (
                <div className="dropdown" id="dropdown">
                  <ul id="skillList">
                    {filteredSkills.map((skill) => (
                      <li key={skill} onClick={() => addSkill(skill)}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <label htmlFor="resume">Resume Upload</label>
            <input type="file" id="resume" accept=".pdf, .doc, .docx" />

            <label htmlFor="experience">Experience</label>
            <input
              type="number"
              id="experience"
              placeholder="Enter years of experience"
              min="0"
            />

            <label htmlFor="linkedin">LinkedIn Profile Link (Optional)</label>
            <input
              type="url"
              id="linkedin"
              placeholder="Enter LinkedIn profile link"
            />

            <label htmlFor="github">GitHub Profile Link (Optional)</label>
            <input
              type="url"
              id="github"
              placeholder="Enter GitHub profile link"
            />
          </form>
        </div>
        <button type="submit">Save Changes</button>
      </div>
    </div>  
  );
}

export default CProfile;
