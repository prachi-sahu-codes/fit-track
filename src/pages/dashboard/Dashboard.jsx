import React from "react";
import NavBar from "../../layout/navBar/NavBar";

const Dashboard = () => {
  return (
    <div className="w-calc-mainBody p-1">
      <NavBar title="Dashboard" />
      <h1 className="text-white">
        Total Calories Burned, Total Calories Consumed, Total Calories Goal,
        Remaining Calories to Goal
      </h1>
    </div>
  );
};

export default Dashboard;
