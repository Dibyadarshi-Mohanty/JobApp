import React from 'react'
import "./CandidateProfilePreview.css"
export default function CandidateProfilePreview() {
  return (
    <>
    
    <div className='container preview-div'>
      <div className="profile-card">
      <h1 className='preview-h1'>Profile Preview</h1>
        <img className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="Profile Picture"/>
      
        <div className="profile-details">
            <label>Name:</label>
            <p>Kshiti Ghelani</p>
            
            <label>Email:</label>
            <p>kshitighelani@gmail.com</p>
            
            <label>Phone:</label>
            <p>123 456 7890</p>
            
            <label>Domain:</label>
            <p>Web Development</p>
            
            <label>Skills:</label>
            <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="profile-buttons">
            <button className="btn edit">Edit Profile</button>
            <button className="btn logout">Logout</button>
        </div>
    </div>
    </div>
    </>
  )
}
