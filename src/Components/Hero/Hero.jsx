import About from "../About/About";
import CompanyAbout from "../About/CompanyAbout";
import Features from "../Features/Features";
import FAQ from "../FAQ/FAQ";
import { experienceOptions, jobOptions, locations } from "../../constants/data";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Hero() {
  const [job, setJob] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");

  const renderOptions = (options) => options.map((opt) => <option key={opt} value={opt}
  >{opt}</option>);

  const navigate = useNavigate();
  return (
    <>
      <div className="container hero-cont">
        <div className="row main-hero">
          <h1 className="hero-heading text-center">Discover the career you&apos;ve always dreamed of.</h1>
          <p className="hero-para text-center">Find the perfect job for you with our expert advice and resources.</p>
          <div className="search">
            <div className="job-div">
              <div className="form-group">
                <select id="category" className="hero-select"
                  onChange={(e) => setJob(e.target.value)}
                  value={job}
                >
                  <option value="">Select job</option>
                  {renderOptions(jobOptions)}
                </select>
              </div>
              <div className="form-group">
                <select id="experience" className="hero-select"
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                >
                  <option value="">Select experience</option>
                  {renderOptions(experienceOptions)}
                </select>
              </div>
              <div className="form-group">
                <select name="skills" className="hero-select"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                >
                  <option value="">Select any location</option>
                  {renderOptions(locations)}
                </select>
              </div>
              <div className="form-group">
                <button className="search-btn"
                  onClick={() => navigate("/jobs", { state: { job, experience, location } })}
                >Search</button>
              </div>
            </div>
          </div>
          <div className="poster">
            <div className="poster-content">
              <h2 className="font-weight-bold">Feeling anxious about job interviews?</h2>
              <p>Build your confidence with mock sessions led by our industry experts!</p>
              <a href="#"><button className="poster-btn">Check details</button></a>
            </div>
            <img src="/images/mock-interview-.png" alt="" className="poster-img" />
          </div>
        </div>
      </div>
      <About />
      <CompanyAbout />
      <Features />
      <FAQ />
    </>
  );
}
