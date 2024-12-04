import PropTypes from 'prop-types';
import "./ConfirmationModal.css";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                <p className="modal-message">{message}</p>
                <div className="modal-buttons">
                    <button onClick={onClose} className="modal-cancel-btn">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="modal-confirm-btn">
                        Confirm
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ConfirmationModal;

ConfirmationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
};
