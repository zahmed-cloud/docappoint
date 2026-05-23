import {
  Navigate,
  useLocation,
} from "react-router-dom";

import LoadingSpinner from "../Loadingspinner/Loadingspinner";

const PrivateRoute = ({ children }) => {

  const location = useLocation();

  const token =
    localStorage.getItem("access-token");

  const user =
    localStorage.getItem("logged-user");

  if (token && user) {

    return children;

  }

  if (!token) {

    return (
      <Navigate
        to="/login"
        state={location.pathname}
      />
    );

  }

  return <LoadingSpinner />;

};

export default PrivateRoute;