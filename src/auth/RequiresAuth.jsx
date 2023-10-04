import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import store from "../configureStore";
import SideBar from "../components/sideBar/SideBar";
import Footer from "../layout/footer/Footer";
import { useSelector } from "react-redux";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const token = useSelector((state) => state?.auth?.token);
  return token ? (
    <div>
      <div className="flex">
        <SideBar />
        {children}
      </div>
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location?.pathname }} replace />
  );
};

export default RequiresAuth;
