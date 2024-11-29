import React from "react";
import { Link } from "react-router-dom";
import "./CompanyDashboard.css"
export default function CompanyDashboard() {
  return (
    <div className="container CompanyDashboard">
      <div className="row">
        <div className="col-12 company-name-div">
          <h1>Welcome Company Name </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3 mb-3">
          <div className="card dashboard-cards">
            <h5>Jobs Posted</h5>
            <br />
            <h5>15</h5>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card dashboard-cards">
            <h5>Candidate Applied</h5>
            <br />
            <h5>120</h5>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card dashboard-cards">
            <h5>Candidate Hired</h5>
            <br />
            <h5>30</h5>
          </div>
        </div>
        <div className="col-3 mb-3">
          <div className="card dashboard-cards">
            <h5>Success Ratio</h5>
            <br />
            <h5>70%</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 ">
          <h2 className="company-heading text-center">Quick Settings</h2>
          <div className="post-jobs-want">
            <div className="row">
              <div className="col-6 mb-3 p-0">
                <Link to="/#"><button className="card col-btn"><p><i class="fa-solid fa-pen"></i>Edit Your Profile</p></button></Link>
              </div>
              <div className="col-6 mb-3 p-0">
                <Link to="/#"><button className="card col-btn"><p><i class="fa-solid fa-building"></i>Profile Preview</p></button></Link>

              </div>
            </div>
            <Link to="/job-listing"><button className="card row-btn"><p><i className="fa-solid fa-plus mr-2 "></i>Want to post more  Jobs</p></button></Link>
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
