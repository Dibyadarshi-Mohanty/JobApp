import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element, allowedRoles }) => {
    const { user, isAuthenticated } = useSelector((state) => state.user);

    if (!isAuthenticated) {
        return <Navigate to="/CandidateLogin" />;
    }

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/" />;
    }

    return element;
};

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
    allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default PrivateRoute;
