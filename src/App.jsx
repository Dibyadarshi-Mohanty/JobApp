
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
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
