import './App.css'
import CandidateJobListing from './Components/Candidate-Pages/Candidate-JobsListing/CandidateJobListing'
import CandidateProfilePreview from './Components/Candidate-Pages/Candidate-Profile/CandidateProfilePreview'
import CProfile from './Components/Candidate-Pages/Candidate-Profile/CProfile'
import CandidateDetails from './Components/Company-Pages/CandidateDetails/CandidateDetails'
import JobPosting from './Components/Company-Pages/JobPost/JobPosting'
import Footer from './Components/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CandidateJobApply from './Components/Candidate-Pages/Job-Apply/CandidateJobApply'
import CandidateLogin from './Components/Candidate-Pages/CandidateLogin/CandidateLogin'
import CompanyLogin from './Components/Company-Pages/CompanyLogin/CompanyLogin'
import CompanyDashboard from './Components/Company-Pages/CompanyDashboard/CompanyDashboard'
import Loader1 from './Components/Loaders/Loader1'
import CandidateDashboard from './Components/Candidate-Pages/Candidate Dashboard/CandidateDashboard'

import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/user.js';
import PrivateRoute from './Components/PrivateRoute';
import { getJobs } from './redux/actions/job.js'

function App() {
  const dispatch = useDispatch();

  const { error, message, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getJobs({}))
  }, [])

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  if (loading || isAuthenticated === null) {
    return (
      <div style={{ minHeight: '100dvh', display: "grid", alignItems: "center" }}>
        <Loader1 />
      </div>
    )
  }


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />

          {!isAuthenticated && (
            <>
              <Route path="/CandidateLogin" element={<CandidateLogin />} />
              <Route path="/CompanyLogin" element={<CompanyLogin />} />
            </>
          )}

          <Route
            path="/upcoming-events"
            element={
              <PrivateRoute
                element={<CandidateJobListing />}
                allowedRoles={["candidate"]}
              />
            }
          />
          <Route
            path="/jobs"
            element={
              <CandidateJobApply />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute
                element={<CProfile />}
                allowedRoles={["candidate"]}
              />
            }
          />
          <Route
            path="/profile-preview"
            element={
              <PrivateRoute
                element={<CandidateProfilePreview />}
                allowedRoles={["candidate"]}
              />
            }
          />

          <Route
            path="/candidates-details"
            element={
              <PrivateRoute
                element={<CandidateDetails />}
                allowedRoles={["interviewer"]}
              />
            }
          />
          <Route
            path="/job-listing"
            element={
              <PrivateRoute
                element={<JobPosting />}
                allowedRoles={["interviewer"]}
              />
            }
          />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
