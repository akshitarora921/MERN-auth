import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let user = null;
  return !user ? <Navigate to='/login' /> : children;
};

export default PrivateRoute;
