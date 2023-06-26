import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({ children }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAuth = useSelector(state => state.auth.token);
  const location = useLocation();
  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;