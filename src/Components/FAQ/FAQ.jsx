import React from 'react';

export default function FAQ() {
  return (
    <section className="py-3 py-md-5 Faq ">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img className="img-fluid rounded" loading="lazy" src="./images/faq.png" alt="How can we help you?" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end ">
              <div className="col-12 col-xl-11">
                <h2 className="company-heading mb-3">How can we help you?</h2>
                <p className="Faq-p text-muted mb-5">
                  We are here to assist both candidates and employers in achieving their goals. Explore the FAQs to get your questions answered.
                </p>
                <div className="accordion accordion-flush" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How Can Candidates Prepare for Interviews?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>To prepare for interviews, candidates can:</p>
                        <ul>
                          <li>Take mock interviews to simulate real scenarios.</li>
                          <li>Complete assessments to boost confidence and identify strengths.</li>
                          <li>Download PDFs of frequently asked interview questions from our platform.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How Can Employers Find the Right Talent?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Employers can discover the perfect candidates by:
                        <ul>
                          <li>Posting job openings tailored to their requirements.</li>
                          <li>Browsing candidate profiles to match skills and experience.</li>
                          <li>Scheduling interviews with shortlisted candidates through our platform.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How Can I Post or Apply for Jobs?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>For Candidates:</p>
                        <ul>
                          <li>Sign in to your account and browse available job listings.</li>
                          <li>Select a job and click "Apply".</li>
                          <li>Upload your resume and follow the steps to submit your application.</li>
                        </ul>
                        <p>For Employers:</p>
                        <ul>
                          <li>Sign in to your account and navigate to the "Post a Job" section.</li>
                          <li>Fill in the job details and requirements.</li>
                          <li>Click "Publish" to make your listing live.</li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What Additional Resources Are Available for Candidates?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Candidates can access:</p>
                        <ul>
                          <li>Mock interview sessions for practice.</li>
                          <li>Customizable assessments for personal growth.</li>
                          <li>Downloadable PDFs of curated interview questions.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How Do I Manage My Profile?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      You can update your account settings and profile information by selecting "Edit Profile" in the dashboard.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
