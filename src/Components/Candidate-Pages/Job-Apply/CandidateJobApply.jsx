import { useState } from "react";
import "./CandidateJobApply.css";
import { experienceOptions, jobOptions as jobRoles } from "../../../constants/data";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";


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

CandidateJobApply.propTypes = {
  candidate: PropTypes.object.isRequired,
};

const FilterBar = ({ onFilterChange, job, experience, location }) => {
  const [selectedJob, setSelectedJob] = useState(job);
  const [selectedExperience, setSelectedExperience] = useState(experience);
  const [selectedLocation, setSelectedLocation] = useState(location);

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
        {
          experienceOptions.map((experience) => (
            <option key={experience} value={experience}>
              {experience}
            </option>
          ))
        }
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

FilterBar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  job: PropTypes.string,
  experience: PropTypes.string,
  location: PropTypes.string,
};

const CandidateFilteringApp = () => {
  const { state } = useLocation();
  const { job, experience, location } = state || {};

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
            <FilterBar
              onFilterChange={handleFilterChange}
              job={job}
              experience={experience}
              location={location}
            />
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
