import React from 'react'

export default function About() {
  return (
    <div className='container about-cont'>
        <div className="about-heading text-center">
        <h2 id='h2-h'>Talent finds its place,</h2> 
        <h2>opportunities find their match</h2>
        <p className='text-center'>
        Empowering job seekers and employers to connect seamlessly. Find your dream job or discover top talent—all in one place!
    </p>
    <p></p>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <h4 className='mt-5 p-2'>At <span className='text-danger'>TalentConnect</span>, we bridge the gap between skills and opportunities. Whether you're exploring career paths or aiming for your dream job, our platform empowers you to apply for roles aligned with your expertise and passions. From tailored job listings to a seamless application process, we ensure every candidate finds a role that fits them perfectly  </h4>
            </div>
            <div className="col-12 col-md-6">
                <img src="/images/pic-hero.png" alt="" className='C-img'/>
            </div>
        </div>
        
    </div>
  )
}
