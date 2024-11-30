import ProfileComplete from "../../Profile-Page/ProfileComplete";
import JobListingCarousel from "../../Carousel/JobListingCarousel"
import "./CompanyDashboard.css"
import { useSelector } from "react-redux";

export default function CompanyDashboard() {
  const { user } = useSelector(state => state.user);
  const { jobs } = useSelector(state => state.job);
  let postedJob = jobs && user && jobs.filter(job => (
    user._id === job.createdBy
  ))
  let appliedCandidates = postedJob && postedJob.reduce((acc, job) =>
    acc + job.applications.length, 0
  )

  return (
    <div className="container CompanyDashboard">
      <div className="row">
        <div className="col-12 company-name-div">
          <h1>Welcome {user?.name}</h1>
        </div>
      </div>
      <div className="row" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div className="col-3 mb-3">
          <div className="card dashboard-cards">
            <h5>Jobs Posted</h5>
            <br />
            <h5>
              {user?.jobs?.length}
            </h5>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card dashboard-cards">
            <h5>Candidate Applied</h5>
            <br />
            <h5>{appliedCandidates}</h5>
          </div>
        </div>
      </div>
      <div>
        {
          !user?.verfied &&
          <ProfileComplete percentageLeft={user?.verfied} />
        }
        <JobListingCarousel />
      </div>
    </div>
  );
}
