import React, { useState } from "react";
import "./CandidateLogin.css"
export default function CandidateLogin() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container mt-5 Candidatelogin-div">
      <div className="row mt-5 ">
        {/* Left Side Section */}
        <div className="col-md-6 ">
          <h1 className="fw-bold">Land your dream job in just 48 hours with TalentConnect.</h1>
          <p className="text-secondary">
          Kickstart your career with AI-driven opportunities. A single platform for freshers and experienced professionals          </p>
          <hr />
          <div className="d-flex justify-content-between mt-4">
  <div>
    <h5 className="fw-bold text-success">5000+</h5>
    <p>Jobs available</p>
  </div>
  <div>
    <h5 className="fw-bold text-success">70+</h5>
    <p>Companies hiring</p>
  </div>
  <div>
    <h5 className="fw-bold text-success">9+</h5>
    <p>Cities with opportunities</p>
  </div>
</div>

        </div>

        {/* Right Side Section */}
        <div className="col-md-6 login-d">
          <div className="card p-4 login-card shadow-sm" >
            <h3 className="fw-bold text-center">
              {isLogin ? "Let's get started" : "Sign up"}
            </h3>
            <p className="text-center text-secondary">
              {isLogin
                ? "Hire top talent faster with apna"
                : "Create an account to hire top talent faster with apna"}
            </p>

            {/* Form */}
            <form className="Loginform">
              {!isLogin && (
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
            <div className="text-center mt-3">
              <p>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <button
                className="toggleBtn"
                  onClick={toggleForm}
                >
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
