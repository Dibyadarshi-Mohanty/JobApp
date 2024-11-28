import React, { useState } from "react";
import "./CandidateJobApply.css";
// Job roles for the job filter
const jobRoles = [
  "App Developer",
  "Game Developer",
  "Web Developer",
  "Software Engineer",
  "Backend Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "Mobile Developer",
  "Desktop Application Developer",
  "Data Scientist",
  "Data Engineer",
  "Data Analyst",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Big Data Engineer",
  "Deep Learning Specialist",
  "DevOps Engineer",
  "Cloud Engineer",
  "Site Reliability Engineer (SRE)",
  "Infrastructure Engineer",
  "Platform Engineer",
  "System Administrator",
  "Cybersecurity Analyst",
  "Security Engineer",
  "Penetration Tester (Ethical Hacker)",
  "Information Security Manager",
  "Network Security Engineer",
  "Network Engineer",
  "Systems Engineer",
  "Embedded Systems Developer",
  "IoT Developer",
  "Quality Assurance (QA) Engineer",
  "Automation Tester",
  "Performance Tester",
  "Manual Tester",
  "UI/UX Designer",
  "Product Designer",
  "Product Manager",
  "Interaction Designer",
  "Technical Lead",
  "Engineering Manager",
  "CTO (Chief Technology Officer)",
  "Team Lead",
  "Scrum Master",
  "Blockchain Developer",
  "Smart Contract Developer",
  "AR/VR Developer",
  "Quantum Computing Developer",
  "Database Administrator",
  "Data Architect",
  "ETL Developer",
  "Technical Writer",
  "Documentation Specialist",
  "Business Analyst",
  "Integration Specialist",
  "ERP Consultant (SAP, Oracle, etc.)",
];

// Generate candidate data
const candidates = Array.from({ length: 50 }, (_, i) => ({
  name: `Candidate ${i + 1}`,
  experience: Math.floor(Math.random() * 16), // Random years of experience
  location: ["Mumbai", "Hyderabad", "Chennai", "Bangalore", "Odisha", "Delhi"][
    Math.floor(Math.random() * 6)
  ],
  job: jobRoles[Math.floor(Math.random() * jobRoles.length)],
}));

// Candidate Card Component
const CandidateJobApply = ({ candidate }) => {
  return (
    <div className="job-card">
      <h3>
        <b>{candidate.job}</b>
      </h3>
      <p>
        <strong>{candidate.name}</strong>
      </p>
      <div className="job-feature">
        <p>
          <i className="fa-solid fa-suitcase"></i> {candidate.experience} years
        </p>
        <p>
          <i className="fa-duotone fa-solid fa-indian-rupee-sign"></i> Not
          disclosed
        </p>
        <p>
          <i className="fa-solid fa-location-dot"></i>{" "}
          <b>{candidate.location}</b>
        </p>
      </div>
      <p>
        <i className="fa-duotone fa-solid fa-note-sticky"></i> Test strategy,
        ETL testing, Management consulting
      </p>
      <div className="apply">
        <button className="apply-btn">Apply</button>
      </div>
    </div>
  );
};

// Filter Bar Component
const FilterBar = ({ onFilterChange }) => {
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleApplyFilters = () => {
    onFilterChange({ selectedJob, selectedExperience, selectedLocation });
  };

  return (
    <div className="filter-bar-job">
      <select
        id="job-filter"
        value={selectedJob}
        onChange={(e) => setSelectedJob(e.target.value)}
      >
        <option value="">Select Job</option>
        {jobRoles.map((job) => (
          <option key={job} value={job}>
            {job}
          </option>
        ))}
      </select>

      <select
        id="experience-filter"
        value={selectedExperience}
        onChange={(e) => setSelectedExperience(e.target.value)}
      >
        <option value="">Years of Experience</option>
        <option value="0">0 years</option>
        <option value="1">1+ years</option>
        <option value="3">3+ years</option>
        <option value="5">5+ years</option>
        <option value="15">15+ years</option>
      </select>

      <select
        id="location-filter"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="">Select Location</option>
        {["Mumbai", "Hyderabad", "Chennai", "Bangalore", "Odisha", "Delhi"].map(
          (location) => (
            <option key={location} value={location}>
              {location}
            </option>
          )
        )}
      </select>

      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

// Main App Component
const CandidateFilteringApp = () => {
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  const handleFilterChange = ({
    selectedJob,
    selectedExperience,
    selectedLocation,
  }) => {
    let updatedCandidates = candidates;

    if (selectedJob) {
      updatedCandidates = updatedCandidates.filter(
        (candidate) => candidate.job === selectedJob
      );
    }

    if (selectedExperience) {
      updatedCandidates = updatedCandidates.filter(
        (candidate) => candidate.experience >= Number(selectedExperience)
      );
    }

    if (selectedLocation) {
      updatedCandidates = updatedCandidates.filter(
        (candidate) => candidate.location === selectedLocation
      );
    }

    setFilteredCandidates(updatedCandidates);
  };

  return (
    <div className="jobSearchDiv">
      <div className=" container applyJobsDiv">
        <div className="row">
          <div className="col-8">
            <h2 className="job-apply-heading">🌟 Explore Your Dream Jobs with Ease 🌟</h2>
            <p className="job-apply-p">
              Looking for the perfect job? Our platform makes it simple and
              tailored just for you. <br /> Filter opportunities by job role, years of
              experience, and location to find roles that match your expertise
              and preferences.
            </p>
            <FilterBar onFilterChange={handleFilterChange} />
          </div>
          <div className="col-4">
<img src="/images/jobApply.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container " id="job-container">
        {filteredCandidates.map((candidate, index) => (
          <CandidateJobApply key={index} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default CandidateFilteringApp;
