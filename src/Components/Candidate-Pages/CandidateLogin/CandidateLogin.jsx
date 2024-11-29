import { useEffect, useState } from "react";
import "./CandidateLogin.css";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../../redux/actions/user.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CandidateLogin() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      if (!email || !password) return toast.error("All fields are required");
      dispatch(login(email, password))
    } else {
      if (!name || !email || !password) return toast.error("All fields are required");
      const formData = { name, email, password };
      dispatch(register(formData, "candidate"));
    }

  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }
    , [isAuthenticated, navigate]);

  return (
    <div className="container mt-5 Candidatelogin-div">
      <div className="row mt-5 ">
        <div className="col-md-6 pt-5 ">
          <h1 className="fw-bold">
            Land your dream job in just 48 hours with TalentConnect.
          </h1>
          <p className="text-secondary">
            Kickstart your career with AI-driven opportunities. A single
            platform for freshers and experienced professionals{" "}
          </p>
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

        <div className="col-md-6 login-d">
          <div className="card p-4 login-card shadow-sm">
            <h3 className="fw-bold text-center">
              {isLogin ? "Let's get started" : "Sign up"}
            </h3>
            <p className="text-center text-secondary">
              {isLogin
                ? "Find your dream job quickly with TalentConnect"
                : "Create an account to discover your dream job with TalentConnect"}
            </p>

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
                    onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" onClick={handleOnSubmit} className="btn btn-success w-100">
                {
                  isLogin ? loading ? "Loading..." : "Log in" : loading ? "Loading..." : "Sign Up"
                }
              </button>
            </form>

            <div className="text-center mt-3 toggle-div">
              <p>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <button className="toggleBtn" onClick={toggleForm} disabled={loading}
                  style={{ cursor: loading ? "not-allowed" : "pointer" }}
                >
                  {isLogin ? "Sign Up" : "Log in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
