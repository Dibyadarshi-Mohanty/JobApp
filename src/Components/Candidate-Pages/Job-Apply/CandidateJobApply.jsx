import { useEffect, useState } from "react";
import "./CandidateJobApply.css";
import { experienceOptions, jobOptions as jobRoles, locations } from "../../../constants/data";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Loader1 from "../../Loaders/Loader1";
import toast from "react-hot-toast";
import { applyJob } from "../../../redux/actions/user";


const CandidateJobApply = ({ job }) => {
  const { user, isAuthenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      return toast.error("Please login to apply for the job");
    }

    if (user?.appliedJobs?.includes(job._id)) {
      return toast.error("You have already applied for this job");
    }

    dispatch(applyJob(job._id));
  }
  return (
    <div className="job-card">
      <h3>
        <b>{job.title}</b>
      </h3>
      <p>
        <strong>{job.companyName ? job.companyName : "NA"}</strong>
      </p>
      <div className="job-feature">
        <p>
          <i className="fa-solid fa-suitcase"></i> {job.yearsOfExperience} years
        </p>
        <p>
          <i className="fa-duotone fa-solid fa-indian-rupee-sign"></i> Not
          disclosed
        </p>
        <p>
          <i className="fa-solid fa-location-dot"></i>{" "}
          <b>{job.location}</b>
        </p>
      </div>
      <p>
        <i className="fa-duotone fa-solid fa-note-sticky"></i>
        {job.description}
      </p>
      <div className="apply">
        <button className="apply-btn" disabled={!isAuthenticated}
          style={{
            backgroundColor: isAuthenticated ? "#4CAF50" : "#ccc",
            cursor: isAuthenticated ? "pointer" : "not-allowed",
          }}
          onClick={(e) => handleOnSubmit(e)}
        >
          {
            user?.appliedJobs?.includes(job._id) ? "Applied" : "Apply"
          }

        </button>
      </div>
    </div>
  );
};

CandidateJobApply.propTypes = {
  job: PropTypes.object.isRequired,
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
        {locations.map(
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
  const { jobs, loading } = useSelector(state => state.job)

  const [allJobs, setAlljobs] = useState(jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    setAlljobs(jobs);
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleFilterChange = ({
    selectedJob,
    selectedExperience,
    selectedLocation,
  }) => {
    let updateJobs = allJobs;

    if (selectedJob) {
      updateJobs = updateJobs.filter(
        (job) => job.category === selectedJob
      );
    }

    if (selectedExperience) {
      updateJobs = updateJobs.filter(
        (job) => job.yearsOfExperience >= Number(selectedExperience)
      );
    }

    if (selectedLocation) {
      updateJobs = updateJobs.filter(
        (job) => job.location === selectedLocation
      );
    }

    setFilteredJobs(updateJobs);
  };

  if (loading) {
    return <Loader1 />
  }

  if (allJobs.length === 0) {
    return (
      <div className="no-jobs"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh"
        }}
      >
        <h3>No Jobs Found</h3>
      </div>
    )
  }

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
            {
              !loading &&
              <FilterBar
                onFilterChange={handleFilterChange}
                job={job}
                experience={experience}
                location={location}
              />
            }
          </div>
          <div className="col-4">
            <img src="/images/jobApply.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container " id="job-container">
        {
          filteredJobs.length > 0 &&
          filteredJobs.map((job) => (
            <CandidateJobApply key={job._id} job={job} />
          ))
        }
      </div>
    </div>
  );
};

export default CandidateFilteringApp;
