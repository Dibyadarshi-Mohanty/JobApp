import React, { useRef } from "react";
import styles from "./CandidateCarousel.module.css"; // Import the CSS module

const CandidateCarousel = () => {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const firstCardWidth = carouselRef.current.querySelector(`.${styles.eventBlock}`).offsetWidth;
    if (direction === "left") {
      carouselRef.current.scrollLeft -= firstCardWidth;
    } else {
      carouselRef.current.scrollLeft += firstCardWidth;
    }
  };

  const events = [
    {
      date: "10 Mar",
      title: "Business Conference",
      time: "01:30 PM - 04:30 PM",
      fullDate: "10 March 2025",
      company: "Infosys",
      jobRole: "Data Analyst",
      description: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
    {
      date: "11 Mar",
      title: "Tech Summit",
      time: "10:00 AM - 01:00 PM",
      fullDate: "11 March 2025",
      company: "Google",
      jobRole: "Software Engineer",
      description: "Join us for a day of tech talks and networking with industry leaders."
    },
    {
      date: "12 Mar",
      title: "Marketing Workshop",
      time: "09:00 AM - 12:00 PM",
      fullDate: "12 March 2025",
      company: "Facebook",
      jobRole: "Marketing Specialist",
      description: "Learn the latest trends in digital marketing and how to apply them."
    },
    {
        date: "12 Mar",
        title: "Marketing Workshop",
        time: "09:00 AM - 12:00 PM",
        fullDate: "12 March 2025",
        company: "Facebook",
        jobRole: "Marketing Specialist",
        description: "Learn the latest trends in digital marketing and how to apply them."
      }
  ];

  return (
    <div className={styles.wrapper}>
      <i id="left" className={`fa-solid fa-chevron-left ${styles.left}`} onClick={() => handleScroll("left")}></i>
      <ul className={styles.carousel} ref={carouselRef}>
        {events.map((event, index) => (
          <li className={styles.eventBlock} key={index}>
            <div className={styles.eventsDate}>
              <div className={styles.fontSize28}>
                <h5 className={styles.dateTime}>{event.date}</h5>
                <h5>{event.title}</h5>
              </div>
            </div>
            <div className={styles.content}>
              <ul className={styles.eventTime}>
                <li>
                  <i className="fa-solid fa-clock"></i> <b>{event.time}</b>
                </li>
                <li>
                  <i className="fa-solid fa-calendar-days"></i> <b>{event.fullDate}</b>
                </li>
                <li>
                  <i className="fa-solid fa-building"></i> <b>Company: {event.company}</b>
                </li>
                <li>
                  <i className="fa-solid fa-clipboard"></i> <b>Job Role: {event.jobRole}</b>
                </li>
              </ul>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <i id="right" className={`fa-solid fa-chevron-right ${styles.right}`} onClick={() => handleScroll("right")}></i>
    </div>
  );
};

export default CandidateCarousel;