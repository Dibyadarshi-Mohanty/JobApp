
import './App.css'
import CandidateJobListing from './Components/Candidate-Pages/Candidate-JobsListing/CandidateJobListing'
import CandidateProfilePreview from './Components/Candidate-Pages/Candidate-Profile/CandidateProfilePreview'
import CProfile from './Components/Candidate-Pages/Candidate-Profile/CProfile'
import CandidateDetails from './Components/Company-Pages/CandidateDetails/CandidateDetails'
import JobPosting from './Components/Company-Pages/JobPost/JobPosting'
import Footer from './Components/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CandidateJobApply from './Components/Candidate-Pages/Job-Apply/CandidateJobApply'
import CandidateLogin from './Components/Candidate-Pages/CandidateLogin/CandidateLogin'
import CompanyLogin from './Components/Company-Pages/CompanyLogin/CompanyLogin'
import CompanyDashboard from './Components/Company-Pages/CompanyDashboard/CompanyDashboard'
import Loader1 from './Components/Loaders/Loader1'
import Loader2 from './Components/Loaders/Loader2'
import Loader3 from './Components/Loaders/Loader3'
import CandidateDashboard from './Components/Candidate-Pages/Candidate Dashboard/CandidateDashboard'


function App() {
  
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/upcoming-events" element={<CandidateJobListing/>}/>
        <Route path="/profile-preview" element={<CandidateProfilePreview/>}/>
        <Route path="/candidates-details" element={<CandidateDetails/>}/>
        <Route path="/profile" element={<CProfile/>}/>
        <Route path="/job-listing" element={<JobPosting/>}/>
        <Route path="/jobs" element={<CandidateJobApply/>}/>
        <Route path="/CandidateLogin" element={<CandidateLogin/>}/>
        <Route path="/CompanyLogin" element={<CompanyLogin/>}/>
        <Route path='/CompanyDashboard' element={<CompanyDashboard/>}/>
        <Route path='/CandidateDashboard' element={<CandidateDashboard/>}/>
        <Route path="/loader1" element={<Loader1/>}/>
        <Route path="/loader2" element={<Loader2/>}/>
        <Route path="/loader3" element={<Loader3/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
