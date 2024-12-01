import "./CandidateDashboard.css";
import CandidateCarousel from "../../Carousel/CandidateCarousel";
import { useSelector } from "react-redux";

export default function CandidateDashboard() {
  const { user } = useSelector(state => state.user)
  return (
    <div className="container CompanyDashboard">
      <div className="row">
        <div className="col-12 company-name-div">
          <h1>Welcome {user?.name}!</h1>
        </div>
      </div>
      <div className="row"
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="col-4 mb-3">
          <div className="card dashboard-cards">
            <h5>Jobs Applied</h5>
            <br />
            <h5>
              {user?.appliedJobs.length}
            </h5>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="card dashboard-cards">
            <h5>Skills</h5>
            <br />
            <h5>
              {user?.skills.length}
            </h5>
          </div>
        </div>
      </div>
      <CandidateCarousel />
    </div>
  );
}
