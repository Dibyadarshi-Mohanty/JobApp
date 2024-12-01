import { useRef } from "react";
import styles from "./CandidateCarousel.module.css";
import { useSelector } from "react-redux";

const CandidateCarousel = () => {
  const carouselRef = useRef(null);
  const { reminders } = useSelector(state => state.user);

  const handleScroll = (direction) => {
    const firstCardWidth = carouselRef.current.querySelector(`.${styles.eventBlock}`).offsetWidth;
    if (direction === "left") {
      carouselRef.current.scrollLeft -= firstCardWidth;
    } else {
      carouselRef.current.scrollLeft += firstCardWidth;
    }
  };

  if (!reminders) return null;

  if (reminders.length === 0) {
    return (
      <div className={styles.wrapper}>
        <h1>No reminders</h1>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {
        reminders.length >= 3 &&
        <i id="left" className={`fa-solid fa-chevron-left ${styles.left}`} onClick={() => handleScroll("left")}></i>
      }
      <ul className={styles.carousel} ref={carouselRef}>
        {reminders.map((event, index) => (
          <li className={styles.eventBlock} key={index}>
            <div className={styles.eventsDate}>
              <div className={styles.fontSize28}>
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
                  <i className="fa-solid fa-clock"></i> <b>{
                    `${new Date(event.startDate).toLocaleString().split(",")[0]}
                     - ${new Date(event.endDate).toLocaleString().split(",")[0]}`
                  }</b>
                </li>
                <li>
                  <i className="fa-solid fa-building"></i> <b>Company: {event.companyName}</b>
                </li>
                <li>
                  <i className="fa-solid fa-clipboard"></i> <b>Job Role: {event.areaOfStudy}</b>
                </li>
              </ul>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
      {
        reminders.length >= 3 &&
        <i id="right" className={`fa-solid fa-chevron-right ${styles.right}`} onClick={() => handleScroll("right")}></i>
      }
    </div>
  );
};

export default CandidateCarousel;