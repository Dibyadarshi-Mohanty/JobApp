import { useState } from "react";
import styles from "./JobUpdateModal.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateJob } from "../../redux/actions/job";

const JobUpdateModal = ({ isOpen, job, onClose }) => {
    const [status, setStatus] = useState(job.status || "Open");
    const dispatch = useDispatch();

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateJob(job._id, status));
        onClose(false);
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Update Job Status</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="status">Status:</label>
                    <select id="status" value={status} onChange={handleStatusChange}>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                    </select>
                    <button type="submit" className={styles.jobup}>Update</button>
                    <button type="button" className={styles.jobup} onClick={() => {
                        onClose(false)
                    }}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobUpdateModal;

JobUpdateModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    job: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};