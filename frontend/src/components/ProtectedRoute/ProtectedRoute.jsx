import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(selectUser);

  let location = useLocation();

  if (!isLoggedIn) {
    // Redirect them to the / page, but save the current location they were trying to go to
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
