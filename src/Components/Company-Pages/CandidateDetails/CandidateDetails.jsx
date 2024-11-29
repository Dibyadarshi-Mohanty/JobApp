import { useState } from "react";
import "./CandidateDetails.css"
import { skillOptions as skillsList, jobOptions as domainList } from "../../../constants/data.js"


const generateCandidates = () => {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Candidate ${i + 1}`,
    experience: Math.floor(Math.random() * 15) + 1, // Random years of experience
    domain: domainList[Math.floor(Math.random() * domainList.length)],
    skills: Array.from({ length: 3 }, () => skillsList[Math.floor(Math.random() * skillsList.length)]).join(", "),
  }));
};

const CandidateDetails = () => {
  const [candidates, setCandidates] = useState(generateCandidates());
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
    const { experience, domain, skill } = filters;

    if (experience) {
      filtered = filtered.filter(candidate => candidate.experience >= experience);
    }
    if (domain) {
      filtered = filtered.filter(candidate => candidate.domain === domain);
    }
    if (skill) {
      filtered = filtered.filter(candidate => candidate.skills.includes(skill));
    }

    setFilteredCandidates(filtered);
  };

  return (
    <div className="Candidate-details">
      <h2 >Candidates Details</h2>

      {/* Filter Bar */}
      <div className="filter-bar">
        <select name="experience" onChange={handleFilterChange}>
          <option value="">Years of Experience</option>
          <option value="1">1+ years</option>
          <option value="3">3+ years</option>
          <option value="5">5+ years</option>
          <option value="10">10+ years</option>
          <option value="15">15+ years</option>
        </select>

        <select name="domain" onChange={handleFilterChange}>
          <option value="">Domain</option>
          {domainList.map(domain => (
            <option key={domain} value={domain}>{domain}</option>
          ))}
        </select>

        <select name="skill" onChange={handleFilterChange}>
          <option value="">Skills</option>
          {skillsList.map(skill => (
            <option key={skill} value={skill}>{skill}</option>
          ))}
        </select>

        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      {/* Candidate List */}
      <div className="container candidate-details-div">
        {filteredCandidates.map(candidate => (
          <div key={candidate.id} className="participant-div">
            <div className="participant-info">
              <h3>{candidate.name}</h3>
              <ul className="event-time">
                <li><i className="fa-solid fa-clock"></i> Experience: <b>{candidate.experience} years</b></li>
                <li><i className="fa-solid fa-building"></i> Domain: <b>{candidate.domain}</b></li>
                <li><i className="fa-solid fa-clipboard"></i> Skills: <b>{candidate.skills}</b></li>
              </ul>
              <div className="buttons-div">
                <button className="resume-view">View Resume</button>
                <div >
                  <button className="accept">Accept <i className="fa-solid fa-check"></i></button>
                  <button className="decline">Decline <i className="fa-solid fa-xmark"></i></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateDetails;


