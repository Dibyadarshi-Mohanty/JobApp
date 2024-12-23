import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isAuthenticated) {
      let currentUrl = window.location.pathname;
      if (currentUrl === "/CompanyLogin" || currentUrl === "/CandidateLogin")
        navigate("/")
      if (currentUrl === "/edit-profile")
        navigate("/profile")
    }

  }, [user])

  return (
    <nav className="navbar navbar-expand-lg bg-body-light navbar-cont fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* <h2>TalentConnect</h2> */}
          <img src="/images/logo2r.png" alt="" className="pt-2" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/">
                Product
              </Link>

            </li>
            {
              !isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/CompanyLogin">
                      Employer Login
                    </Link>
                  </li>

                  <li>
                    <button className="navbar-button">
                      <Link to="/CandidateLogin" className="text-decoration-none">
                        Candidate Login
                      </Link>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {
                    user?.role === "candidate" ? (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link" to="/profile">
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/jobs">
                            Apply for Job
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/room">
                            Join Room
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/quiz">
                            Quiz
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="/pdf">
                            Download PDF
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link" to="/profile">
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/job-listing">
                            Post a Job
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/room">
                            Join Room
                          </Link>
                        </li>
                      </>
                    )
                  }
                </>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
