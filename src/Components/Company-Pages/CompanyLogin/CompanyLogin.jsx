import React, { useState } from "react";
import "./EmployerLogin.css";

export default function CompanyLogin() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container mt-5 EmployerLogin-div">
      <div className="row mt-5">
        {/* Left Side Section */}
        <div className="col-md-6 pt-5">
          <h1 className="fw-bold">
            Hire top talent in just 48 hours with TalentConnect.
          </h1>
          <p className="text-secondary">
            Simplify your hiring process with AI-powered precision. A single
            platform for connecting with top candidates.
          </p>
          <hr />
          <div className="d-flex justify-content-between mt-4">
            <div>
              <h5 className="fw-bold text-success">1000+</h5>
              <p>Qualified candidates</p>
            </div>
            <div>
              <h5 className="fw-bold text-success">70+</h5>
              <p>Companies hiring</p>
            </div>
            <div>
              <h5 className="fw-bold text-success">20+</h5>
              <p>Industries supported</p>
            </div>
          </div>
        </div>

        {/* Right Side Section */}
        <div className="col-md-6 login-d">
          <div className="card p-1 company-login-card shadow-sm">
            <h3 className="fw-bold text-center">
              {isLogin ? "Employer Login" : "Employer Signup"}
            </h3>
            <p className="text-center text-secondary">
              {isLogin
                ? "Access top talent quickly with TalentConnect"
                : "Create an account to find the best candidates"}
            </p>

            {/* Form */}
            <form className="Loginform-company">
              {!isLogin && (
                <>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company-name" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company-name"
                      className="form-control"
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company-email" className="form-label">
                      Company Email
                    </label>
                    <input
                      type="email"
                      id="company-email"
                      className="form-control"
                      placeholder="Enter your company email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signup-domain" className="form-label">
                      Domain of Recruitment
                    </label>
                    <select
                      id="signup-domain"
                      className="form-select"
                      required
                    >
                      <option value="Computer Science">Computer Science</option>
                      <option value="Software Engineering">
                        Software Engineering
                      </option>
                      <option value="Information Technology">
                        Information Technology
                      </option>
                      <option value="Data Science">Data Science</option>
                      <option value="Artificial Intelligence">
                        Artificial Intelligence
                      </option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="Game Development">Game Development</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Network Engineering">
                        Network Engineering
                      </option>
                      <option value="Robotics">Robotics</option>
                      <option value="Blockchain Technology">
                        Blockchain Technology
                      </option>
                      <option value="Human-Computer Interaction">
                        Human-Computer Interaction
                      </option>
                      <option value="Information Systems">
                        Information Systems
                      </option>
                      <option value="Database Management">
                        Database Management
                      </option>
                    </select>
                  </div>
                </>
              )}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Toggle Link */}
            <div className="text-center mt-3 toggle-div">
              <p>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <button className="toggleBtn" onClick={toggleForm}>
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
