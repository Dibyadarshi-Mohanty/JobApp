import React from 'react'

export default function CompanyAbout() {
  return (
    <div className=' container companyAbout'>
        <div className='text-center CA-C'>
        <h2 className='company-heading'>Simplify your hiring process</h2>
        <p>post jobs, assess skills, and find the perfect candidate effortlessly</p>
        </div>
       
      <div className="row">
      <div className="col-6 col-md-6">
                <img src="/images/company_interview.png" alt=""className='Co-img' />
            </div>
            <div className="col-6 col-md-6">

                <h4 className='mt-3 p-2 para'>
                   <span className='fw-bold'>Effortless Job Posting and Recruitment</span><br></br>
                    Finding the right talent is now easier than ever. Our platform enables companies to post job openings tailored to their requirements and needs. Whether you're looking for specialized skills or fresh talent, we simplify the process to ensure you connect with the best candidates. <br /> Create detailed job listings that attract the right applicants and focus on what matters most—building your dream team. </h4>
           <h4 className='mt-2 p-2 para'><span className='fw-bold '>End-to-End Interview Management</span><br />
           From assessing candidate's skills to scheduling interviews, we handle it all. Gain access to essential tools and resources to evaluate candidates effectively and make informed hiring decisions. Whether you're scheduling interviews or providing feedback, our platform adapts to your requirements, giving you a comprehensive recruitment solution.</h4>
            </div>
            
        </div>
    </div>
  )
}
