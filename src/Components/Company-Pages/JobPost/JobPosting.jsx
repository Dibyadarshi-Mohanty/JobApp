// import React, { useEffect } from "react";
// import $ from "jquery";
// import "select2/dist/css/select2.css";
// import "select2";
// import "./JobPosting.css";

// export default function JobPosting() {
//   useEffect(() => {
//     if (window.$) {
//       $(document).ready(() => {
//         $("#domain").select2({
//           placeholder: "Select domain(s)",
//           allowClear: true,
//         });

//         $("#category").select2({
//           placeholder: "Select category(s)",
//           allowClear: true,
//         });
//       });
//     }
//   }, []);

//   return (
//     <div className="Job-container">
//       <div className="row">
//         <div className="col-6 JobForm">
//           <div className="card job-form-card">
//             <h2>Job Posting Form</h2>
//             <form>
//               <div className="form-group">
//                 <label htmlFor="job-title">Job Title</label>
//                 <input
//                   type="text"
//                   id="job-title"
//                   placeholder="Enter job title"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="job-description">Job Description</label>
//                 <textarea
//                   id="job-description"
//                   rows="3"
//                   placeholder="Enter job description"
//                 ></textarea>
//               </div>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="start-date">Start Date</label>
//                   <input type="date" id="start-date" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="end-date">End Date</label>
//                   <input type="date" id="end-date" />
//                 </div>
//               </div>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="experience">Years of Experience</label>
//                   <select id="experience">
//                     <option value="">Select experience</option>
//                     <option value="1+">1+ years</option>
//                     <option value="3+">3+ years</option>
//                     <option value="5+">5+ years</option>
//                     <option value="10+">10+ years</option>
//                     <option value="15+">15+ years</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="location">Location</label>
//                   <input
//                     type="text"
//                     id="location"
//                     placeholder="Enter location"
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="domain">Domain</label>
//                 <select id="domain" multiple>
//                   <option value="Computer Science">Computer Science</option>
//                   <option value="Software Engineering">
//                     Software Engineering
//                   </option>
//                   <option value="Information Technology">
//                     Information Technology
//                   </option>
//                   <option value="Data Science">Data Science</option>
//                   <option value="Artificial Intelligence">
//                     Artificial Intelligence
//                   </option>
//                   <option value="Machine Learning">Machine Learning</option>
//                   <option value="Cybersecurity">Cybersecurity</option>
//                   <option value="Web Development">Web Development</option>
//                   <option value="Mobile App Development">
//                     Mobile App Development
//                   </option>
//                   <option value="Game Development">Game Development</option>
//                   <option value="Cloud Computing">Cloud Computing</option>
//                   <option value="Data Analytics">Data Analytics</option>
//                   <option value="Network Engineering">
//                     Network Engineering
//                   </option>
//                   <option value="Robotics">Robotics</option>
//                   <option value="Blockchain Technology">
//                     Blockchain Technology
//                   </option>
//                   <option value="Human-Computer Interaction">
//                     Human-Computer Interaction
//                   </option>
//                   <option value="Information Systems">
//                     Information Systems
//                   </option>
//                   <option value="Database Management">
//                     Database Management
//                   </option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="category">Category</label>
//                 <select id="category" multiple>
//                   <option value="App Developer">App Developer</option>
//                   <option value="Game Developer">Game Developer</option>
//                   <option value="Web Developer">Web Developer</option>
//                   <option value="Software Engineer">Software Engineer</option>
//                   <option value="Backend Developer">Backend Developer</option>
//                   <option value="Frontend Developer">Frontend Developer</option>
//                   <option value="Full Stack Developer">
//                     Full Stack Developer
//                   </option>
//                   <option value="Mobile Developer">Mobile Developer</option>
//                   <option value="Desktop Application Developer">
//                     Desktop Application Developer
//                   </option>
//                 </select>
//               </div>
//               <div className="form-actions">
//                 <button type="submit">Post Job</button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="col-6 JobListing"></div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./JobPosting.css"; // Import your CSS file

function JobPosting() {
  const [domain, setDomain] = useState([]);
  const [category, setCategory] = useState([]);

  const domainOptions = [
    { value: "Computer Science", label: "Computer Science" },
    { value: "Software Engineering", label: "Software Engineering" },
    { value: "Information Technology", label: "Information Technology" },
    { value: "Data Science", label: "Data Science" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Game Development", label: "Game Development" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "Data Analytics", label: "Data Analytics" },
    { value: "Network Engineering", label: "Network Engineering" },
    { value: "Robotics", label: "Robotics" },
    { value: "Blockchain Technology", label: "Blockchain Technology" },
    {
      value: "Human-Computer Interaction",
      label: "Human-Computer Interaction",
    },
    { value: "Information Systems", label: "Information Systems" },
    { value: "Database Management", label: "Database Management" },
  ];

  const categoryOptions = [
    { value: "App Developer", label: "App Developer" },
    { value: "Game Developer", label: "Game Developer" },
    { value: "Web Developer", label: "Web Developer" },
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Backend Developer", label: "Backend Developer" },
    { value: "Frontend Developer", label: "Frontend Developer" },
    { value: "Full Stack Developer", label: "Full Stack Developer" },
    { value: "Mobile Developer", label: "Mobile Developer" },
    {
      value: "Desktop Application Developer",
      label: "Desktop Application Developer",
    },
    { value: "Data Scientist", label: "Data Scientist" },
    { value: "Data Analyst", label: "Data Analyst" },
    { value: "Machine Learning Engineer", label: "Machine Learning Engineer" },
    {
      value: "Artificial Intelligence Engineer",
      label: "Artificial Intelligence Engineer",
    },
    { value: "Big Data Engineer", label: "Big Data Engineer" },
    { value: "Deep Learning Specialist", label: "Deep Learning Specialist" },
    { value: "DevOps Engineer", label: "DevOps Engineer" },
    { value: "Cloud Engineer", label: "Cloud Engineer" },
    { value: "System Administrator", label: "System Administrator" },
    { value: "Cybersecurity Analyst", label: "Cybersecurity Analyst" },
    { value: "Security Engineer", label: "Security Engineer" },
    {
      value: "Penetration Tester (Ethical Hacker)",
      label: "Penetration Tester (Ethical Hacker)",
    },
    {
      value: "Information Security Manager",
      label: "Information Security Manager",
    },
    { value: "Network Security Engineer", label: "Network Security Engineer" },
    { value: "Network Engineer", label: "Network Engineer" },
    { value: "Systems Engineer", label: "Systems Engineer" },
    {
      value: "Embedded Systems Developer",
      label: "Embedded Systems Developer",
    },
    { value: "IoT Developer", label: "IoT Developer" },
    { value: "Automation Tester", label: "Automation Tester" },
    { value: "Performance Tester", label: "Performance Tester" },
    { value: "Manual Tester", label: "Manual Tester" },
    { value: "UI/UX Designer", label: "UI/UX Designer" },
    { value: "Product Designer", label: "Product Designer" },
    { value: "Product Manager", label: "Product Manager" },
    { value: "Interaction Designer", label: "Interaction Designer" },
    { value: "Technical Lead", label: "Technical Lead" },
    {
      value: "CTO (Chief Technology Officer)",
      label: "CTO (Chief Technology Officer)",
    },
    { value: "Team Lead", label: "Team Lead" },
    { value: "Blockchain Developer", label: "Blockchain Developer" },
    { value: "Smart Contract Developer", label: "Smart Contract Developer" },
    { value: "AR/VR Developer", label: "AR/VR Developer" },
    {
      value: "Quantum Computing Developer",
      label: "Quantum Computing Developer",
    },
    { value: "Database Administrator", label: "Database Administrator" },
    { value: "Data Architect", label: "Data Architect" },
    { value: "ETL Developer", label: "ETL Developer" },
    { value: "Technical Writer", label: "Technical Writer" },
    { value: "Documentation Specialist", label: "Documentation Specialist" },
    { value: "Business Analyst", label: "Business Analyst" },
    { value: "Integration Specialist", label: "Integration Specialist" },
    {
      value: "ERP Consultant (SAP, Oracle, etc.)",
      label: "ERP Consultant (SAP, Oracle, etc.)",
    },
  ];

  return (
    <div className="Job-container">
      <div className="row">
        <div className="col-6 JobForm">
          <div className="card job-form-card">
            <h2>Job Posting Form</h2>
            <form>
              <div className="form-group">
                <label htmlFor="job-title">Job Title</label>
                <input
                  type="text"
                  id="job-title"
                  placeholder="Enter job title"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="job-description">Job Description</label>
                <textarea
                  id="job-description"
                  rows="3"
                  placeholder="Enter job description"
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="start-date">Start Date</label>
                  <input type="date" id="start-date" />
                </div>
                <div className="form-group">
                  <label htmlFor="end-date">End Date</label>
                  <input type="date" id="end-date" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="experience">Years of Experience</label>
                  <select id="experience">
                    <option value="">Select experience</option>
                    <option value="1+">1+ years</option>
                    <option value="3+">3+ years</option>
                    <option value="5+">5+ years</option>
                    <option value="10+">10+ years</option>
                    <option value="15+">15+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter location"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="domain">Domain</label>
                <Select
                  isMulti
                  name="domain"
                  value={domain}
                  onChange={setDomain}
                  options={domainOptions}
                  placeholder="Select domain(s)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <Select
                  isMulti
                  name="category"
                  value={category}
                  onChange={setCategory}
                  options={categoryOptions}
                  placeholder="Select category(s)"
                />
              </div>
              <div className="form-actions">
                <button type="submit">Post Job</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-6 JobListing">
            <h2 className="company-heading text-center">Upcoming Interviews</h2>
          <div class="container EventsUpcoming">
            <div class="upcoming">
              <div class="event-block">
                <div class="events-date">
                  <div class="font-size28">10</div>
                  <div class="font-size14">Mar</div>
                </div>
                <div></div>
                <div class="content">
                  <h5>Business Conference</h5>
                  <ul class="event-time">
                    <li>
                      <i class="fa-solid fa-clock"></i>
                      <b>01:30 PM - 04:30 PM</b>{" "}
                    </li>
                    <li>
                      <i class="fa-solid fa-calendar-days"></i>
                      <b>10 March 2025</b>
                    </li>
                    <li>
                      <i class="fa-solid fa-building"></i>
                      <b>Company : Infosys</b>{" "}
                    </li>
                    <li>
                      <i class="fa-solid fa-clipboard"></i>
                      <b>Job Role:Data Analyst </b>
                    </li>
                  </ul>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore.
                  </p>
                  <a href="#" id="button-a">
                    {" "}
                    <button class="check"> Check participants</button>{" "}
                  </a>
                </div>
              </div>
              <div class="event-block">
                <div class="events-date">
                  <div class="font-size28">10</div>
                  <div class="font-size14">Mar</div>
                </div>
                <div></div>
                <div class="content">
                  <h5>Business Conference</h5>
                  <ul class="event-time">
                    <li>
                      <i class="fa-solid fa-clock"></i>
                      <b>01:30 PM - 04:30 PM</b>{" "}
                    </li>
                    <li>
                      <i class="fa-solid fa-calendar-days"></i>
                      <b>10 March 2025</b>
                    </li>
                    <li>
                      <i class="fa-solid fa-building"></i>
                      <b>Company : Infosys</b>{" "}
                    </li>
                    <li>
                      <i class="fa-solid fa-clipboard"></i>
                      <b>Job Role:Data Analyst </b>
                    </li>
                  </ul>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore.
                  </p>
                  <a href="#" id="button-a">
                    {" "}
                    <button class="check"> Check participants</button>{" "}
                  </a>
                </div>
              </div>
              <div class="event-block">
                <div class="events-date">
                  <div class="font-size28">10</div>
                  <div class="font-size14">Mar</div>
                </div>
                <div></div>
                <div class="content">
                  <h5>Business Conference</h5>
                  <ul class="event-time">
                    <li>
                      <i class="fa-solid fa-clock"></i>
                      <b>01:30 PM - 04:30 PM</b>{" "}
                    </li>
                    <li>
                      <i class="fa-solid fa-calendar-days"></i>
                      <b>10 March 2025</b>
                    </li>
                    <li>
                      <i class="fa-solid fa-building"></i>
                      <b>Company : Infosys</b>{" "}
                    </li>
                    <li>
                      <i class="fa-solid fa-clipboard"></i>
                      <b>Job Role:Data Analyst </b>
                    </li>
                  </ul>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore.
                  </p>
                  <a href="#" id="button-a">
                    {" "}
                    <button class="check"> Check participants</button>{" "}
                  </a>
                </div>
              </div>
              <div class="event-block">
                <div class="events-date">
                  <div class="font-size28">10</div>
                  <div class="font-size14">Mar</div>
                </div>
                <div></div>
                <div class="content">
                  <h5>Business Conference</h5>
                  <ul class="event-time">
                    <li>
                      <i class="fa-solid fa-clock"></i>
                      <b>01:30 PM - 04:30 PM</b>{" "}
                    </li>
                    <li>
                      <i class="fa-solid fa-calendar-days"></i>
                      <b>10 March 2025</b>
                    </li>
                    <li>
                      <i class="fa-solid fa-building"></i>
                      <b>Company : Infosys</b>{" "}
                    </li>
                    <li>
                      <i class="fa-solid fa-clipboard"></i>
                      <b>Job Role:Data Analyst </b>
                    </li>
                  </ul>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore.
                  </p>
                  <a href="#" id="button-a">
                    {" "}
                    <button class="check"> Check participants</button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPosting;
