import React from "react";
import "./Features.css"; // Include this for external styles if needed

export default function Features() {
  return (
    <div className="Features py-5">
      <div className="text-center mb-4">
        <h2 className="company-heading">Discover Features, Unlock Possibilities.</h2>
        <p className="Faq-p text-muted">
          Unlock the tools you need to connect with the right opportunities and land your dream job.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="card feature-card shadow-sm">
              <img
                className="card-img-top feature-img"
                src="images/Job-Hunting-removebg-preview.png"
                alt="Job Hunting"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Job Hunting</h5>
                <p className="card-text text-muted">
                  Discover new job opportunities and secure the perfect role that matches your skills.
                </p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card feature-card shadow-sm">
              <img
                className="card-img-top feature-img"
                src="images/Screenshot_2024-11-26_145807-removebg-preview.png"
                alt="Career Tools"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Career Tools</h5>
                <p className="card-text text-muted">
                  Use advanced tools to enhance your career growth and track your progress.
                </p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card feature-card shadow-sm">
              <img
                className="card-img-top feature-img"
                src="images/Screenshot_2024-11-26_145818-removebg-preview.png"
                alt="Networking"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Networking</h5>
                <p className="card-text text-muted">
                  Connect with industry professionals and expand your network.
                </p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
