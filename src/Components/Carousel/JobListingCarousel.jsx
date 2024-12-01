import { useEffect, useRef, useState } from "react";
import styles from "./JobListingCarousel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchApplications } from "../../redux/actions/user";

const JobListing = () => {
  const carouselRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user } = useSelector(state => state.user);
  const { jobs } = useSelector(state => state.job);

  const handleScroll = (direction) => {
    const firstCardWidth = carouselRef.current.querySelector(`.${styles.eventBlock}`).offsetWidth;
    if (direction === "left") {
      carouselRef.current.scrollLeft -= firstCardWidth;
    } else {
      carouselRef.current.scrollLeft += firstCardWidth;
    }
  };

  const candidateJobs = user && jobs && jobs.filter(job => job.createdBy === user._id);

  const [events, setEvents] = useState(candidateJobs);

  useEffect(() => {
    if (candidateJobs && candidateJobs.length > 0)
      setEvents(candidateJobs)
  }, [jobs])

  const handlePress = (id) => {
    navigate(`/candidates-details/${id}`)
    dispatch(fetchApplications(id))
  }

  return (
    <div className={styles.wrapper}>
      {
        candidateJobs && candidateJobs.length === 0 && <h1>No Jobs Posted</h1>
      }
      {
        candidateJobs && candidateJobs.length >= 3 &&
        <i className={`fa-solid fa-chevron-left ${styles.leftArrow}`} onClick={() => handleScroll("left")}></i>
      }
      <ul className={styles.carousel} ref={carouselRef}>
        {
          events && events.length > 0 &&
          events.map((event, index) => (
            <li className={styles.eventBlock} key={index}>
              <div className={styles.eventsDate}>
                <div className={styles.dateTimeContainer}>
                  <h5 className={styles.dateTime}>{
                    `${new Date(event.startDate).toDateString().split(" ")[2]}
                      ${new Date(event.startDate).toDateString().split(" ")[1]}
                    `
                  }</h5>
                  <h5>{event.title}</h5>
                </div>
              </div>
              <div className={styles.content}>
                <ul className={styles.eventTime}>
                  <li>
                    <i className="fa-solid fa-calendar-days"></i> <b>{

                      `${new Date(event.startDate).toLocaleString().split(",")[0]}
                     - ${new Date(event.endDate).toLocaleString().split(",")[0]}`

                    }</b>
                  </li>
                  <li>
                    <i className="fa-solid fa-building"></i> <b>Company: {event.companyName}</b>
                  </li>
                  <li>
                    <i className="fa-solid fa-clipboard"></i> <b>Area of study: {event.areaOfStudy}</b>
                  </li>
                </ul>
                <p className={styles.eventDescription}>{event.description}</p>
                <button className={styles.checkButton}
                  onClick={() => handlePress(event._id)}
                >Check participants</button>
              </div>
            </li>
          ))}
      </ul>
      {
        candidateJobs && candidateJobs.length >= 3 &&
        <i className={`fa-solid fa-chevron-right ${styles.rightArrow}`} onClick={() => handleScroll("right")}></i>
      }
    </div>
  );
};

export default JobListing;
