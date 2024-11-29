import { useState } from "react";
import "./EmployerLogin.css";
import { useDispatch } from "react-redux";
import { login, register } from "../../../redux/actions/user.js"
import { jobOptions } from "../../../constants/data";

export default function CompanyLogin() {
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    companyEmail: "",
    domainOfRecruitment: "",
    password: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const { companyEmail: email, password } = form;
      dispatch(login(email, password));
    } else {
      dispatch(register(form, "interviewer"));
    }
  }

  return (
    <div className="container mt-5 EmployerLogin-div">
      <div className="row mt-5">
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

            <form className="Loginform-company">
              {!isLogin ? (
                <>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      onChange={(e) => handleChange(e)}
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
                      name="companyName"
                      onChange={(e) => handleChange(e)}
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
                      name="companyEmail"
                      onChange={(e) => handleChange(e)}
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
                      name="domainOfRecruitment"
                      onChange={(e) => handleChange(e)}
                      value={form.domainOfRecruitment}
                    >
                      <option value="">Select Domain</option>
                      {
                        jobOptions.map((domain, index) => (
                          <option value={domain} key={index}>{domain}</option>
                        ))
                      }
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <label htmlFor="company-email" className="form-label">
                      Company Email
                    </label>
                    <input
                      type="email"
                      id="company-email"
                      className="form-control"
                      name="companyEmail"
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter your company email"
                      required
                    />
                  </div>
                </>
              )}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  onChange={(e) => handleChange(e)}
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100"
                onClick={(e) => handleOnSubmit(e)}
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

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
