import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import store from "../configureStore";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const token = store.getState()?.auth?.token;
  console.log(token);
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location?.pathname }} replace />
  );
};

export default RequiresAuth;
