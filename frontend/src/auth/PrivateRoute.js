import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
const PrivateRoute = ({ children }) => {
  let user = useUser();
  return !user ? <Navigate to='/login' /> : children;
};

export default PrivateRoute;
