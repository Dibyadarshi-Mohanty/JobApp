import { useEffect, useRef, useState } from "react";
import styles from "./JobListingCarousel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchApplications } from "../../redux/actions/user";
import JobUpdateModal from "../modal/JobUpdateModal";
import ConfirmationModal from "../modal/ConfirmationModal";
import { deleteJob } from "../../redux/actions/job";

const JobListing = () => {
  const carouselRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { jobs } = useSelector((state) => state.job);

  const [events, setEvents] = useState([]);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (user && jobs) {
      const candidateJobs = jobs.filter((job) => job.createdBy === user._id);
      setEvents(candidateJobs);
    }
  }, [jobs, user]);

  const handlePress = (id) => {
    navigate(`/candidates-details/${id}`);
    dispatch(fetchApplications(id));
  };

  const toggleDropdown = (id) => {
    setVisibleDropdown((prev) => (prev === id ? null : id));
  };

  const handleUpdate = (job) => {
    setSelectedJob(job);
    setIsUpdateModalOpen(true);
  };

  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      dispatch(deleteJob(selectedJob._id));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      {events.length === 0 && <h1>No Jobs Posted</h1>}
      {events.length >= 3 && (
        <i
          className={`fa-solid fa-chevron-left ${styles.leftArrow}`}
        ></i>
      )}
      <ul className={styles.carousel} ref={carouselRef}>
        {events.map((event) => (
          <li
            className={styles.eventBlock}
            key={event._id}
            onClick={() => setVisibleDropdown(null)}
          >
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
            <div className={styles.dropdownContainer}>
              <button
                className={styles.threeDotButton}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(event._id);
                }}
              >
                &#x22EE;
              </button>
              {visibleDropdown === event._id && (
                <div className={styles.dropdownMenu}>
                  <button
                    className={styles.dropdownItem}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdate(event);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className={styles.dropdownItem}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(event);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
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
              <button
                className={styles.checkButton}
                onClick={() => handlePress(event._id)}
              >
                Check Participants
              </button>
            </div>
          </li>
        ))}
      </ul>
      {events.length >= 3 && (
        <i
          className={`fa-solid fa-chevron-right ${styles.rightArrow}`}
        ></i>
      )}
      {
        selectedJob &&
        <JobUpdateModal
          isOpen={isUpdateModalOpen}
          job={selectedJob}
          onClose={setIsUpdateModalOpen}
        />
      }
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        message="Are you sure you want to delete this job?"
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default JobListing;
