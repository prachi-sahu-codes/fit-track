import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
 
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location?.pathname }} replace />
  );
}