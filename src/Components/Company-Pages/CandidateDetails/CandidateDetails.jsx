import { useEffect, useState } from "react";
import "./CandidateDetails.css"
import { skillOptions as skillsList, experienceOptions } from "../../../constants/data.js"
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplications } from "../../../redux/actions/user.js";
import toast from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL } from "../../../redux/store.js";
import Loader1 from "../../Loaders/Loader1.jsx";

const CandidateDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { applications, rooms, loading } = useSelector(state => state.user)

  const [candidates, setCandidates] = useState(applications);
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [filters, setFilters] = useState({
    experience: "",
    domain: "",
    skill: "",
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = () => {
    let filtered = candidates;
    const { experience, skill } = filters;

    if (experience) {
      filtered = filtered.filter(candidate => candidate.candidate.yearsOfExperience >= experience);
    }

    if (skill) {
      filtered = filtered.filter(candidate => candidate.candidate.skills.includes(skill));
    }

    setFilteredCandidates(filtered);
  };

  useEffect(() => {
    if (!id)
      navigate("/");
  }, [id, navigate]);

  useEffect(() => {
    if (!applications)
      dispatch(fetchApplications(id));
  }, [applications]);

  const handleClick = (url) => {
    if (!url) return toast.error("No resume found");
    window.open(`${url}`, "_blank")
  }

  const acceptHandler = async (jobId, candidateId, status) => {
    try {
      if (status === "accept") {
        const { data } = await axios.put(`${BACKEND_URL}/interviewer/approve-candidate/${jobId}/${candidateId}`, {}, {
          withCredentials: true,
          credentials: 'include'
        });
        toast.success(data.message);
      }
      else {
        const { data } = await axios.put(`${BACKEND_URL}/interviewer/reject-candidate/${jobId}/${candidateId}`, {}, {
          withCredentials: true,
          credentials: 'include'
        });
        toast.success(data.message);
      }
      dispatch(fetchApplications(id));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  const getRoomCodeContent = (event) => {
    const currentRoomCode = rooms && rooms.find((room) => room.candidateId === event.candidate._id);


    if (!currentRoomCode?.roomId) return <h5>
      Reload the page to get room code
    </h5>
    return (
      <h5 style={{ color: "#4CAF50" }}>Room Code:
        {currentRoomCode?.roomId}</h5>
    );
  };

  if (loading) return <Loader1 />

  return (
    <div className="Candidate-details">
      <h2 >Candidates Details</h2>

      <div className="filter-bar">
        <select name="experience" onChange={handleFilterChange}>
          <option value="">Years of Experience</option>
          {
            experienceOptions.map(exp => (
              <option key={exp} value={exp}>{exp}</option>
            ))
          }
        </select>

        <select name="skill" onChange={handleFilterChange}>
          <option value="">Skills</option>
          {skillsList.map(skill => (
            <option key={skill} value={skill}>{skill}</option>
          ))}
        </select>

        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      <div className="container candidate-details-div">
        {
          filteredCandidates && filteredCandidates.length === 0 ?
            <h3>No Candidates Found</h3>
            :
            filteredCandidates && filteredCandidates.length !== 0 &&
            filteredCandidates.map((candidate) => (
              <div key={candidate._id} className="participant-div">
                <div className="participant-info">
                  <h3>{candidate.candidate.name}</h3>
                  <ul className="event-time">
                    <li><i className="fa-solid fa-clock"></i> Experience: <b>{candidate.candidate.yearsOfExperience} years</b></li>
                    <li><i className="fa-solid fa-clipboard"></i> Skills: <b>{candidate.candidate.skills?.join(",")}</b></li>
                  </ul>
                  <div className="buttons-div">
                    <button className="resume-view"
                      onClick={
                        () => handleClick(candidate.candidate.resume.url)
                      }
                    >View Resume</button>
                    {
                      candidate.status !== "rejected" && candidate.status !== "accepted" ?
                        <div >
                          <button className="accept"
                            onClick={() => acceptHandler(candidate.job, candidate.candidate._id, "accept")}
                          >Accept <i className="fa-solid fa-check"></i></button>
                          <button className="decline"
                            onClick={() => acceptHandler(candidate.job, candidate.candidate._id, "decline")}
                          >Decline <i className="fa-solid fa-xmark"></i></button>
                        </div>
                        :
                        <div
                          style={{
                            color:
                              candidate.status === "accepted" ? "green" : "red"
                          }}
                        >
                          {
                            candidate.status === "accepted" ? "Accepted" : "Rejected"
                          }
                          {
                            candidate.status === "accepted" &&
                            <div>
                              {getRoomCodeContent(candidate)}
                            </div>
                          }
                        </div>
                    }
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CandidateDetails;


