import "./CandidateDashboard.css";
import CandidateJobListing from "../Candidate-JobsListing/CandidateJobListing";

export default function CandidateDashboard() {
  return (
    <div className="container CompanyDashboard">
      <div className="row">
        <div className="col-12 company-name-div">
          <h1>Welcome Candidate Name </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mb-3">
          <div className="card dashboard-cards">
            <h5>Jobs Applied</h5>
            <br />
            <h5>15</h5>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="card dashboard-cards">
            <h5>Jobs ShortListed</h5>
            <br />
            <h5>120</h5>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="card dashboard-cards">
            <h5>Hired</h5>
            <br />
            <h5>30</h5>
          </div>
        </div>
      </div>
      <CandidateJobListing />
    </div>
  );
}
