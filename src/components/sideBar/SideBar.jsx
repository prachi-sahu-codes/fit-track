import React, { useState } from "react";
import dumbbell from "../../assets/dumbbell.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GoHome, GoGoal } from "react-icons/go";
import { LiaDumbbellSolid } from "react-icons/lia";
import { PiBowlFood } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../../store/authStore/action";

const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between items-center p-2 w-28 h-calc-sideBar m-4 rounded-lg border-2 border-iconPurple border-opacity-20 bg-bgBox">
      <div className="flex  flex-col items-center ">
        <img src={dumbbell} className="w-12 h-12 bg-primary rounded-xl p-2" />
        <p className=" text-md text-white pt-2">FitTrack</p>
      </div>

      <div>
        <NavLink to="/dashboard" className="h-14 flex flex-col items-center">
          {location.pathname === "/dashboard" ? (
            <div className="bg-activeIcon w-20 border-iconPurple border-opacity-20 flex flex-col items-center p-2 rounded-lg">
              <GoHome className=" fill-white text-lg" />
              <p className="text-xs text-white pt-1">Dashboard</p>
            </div>
          ) : (
            <div className="p-2">
              <GoHome className=" fill-mediumGray text-lg" />
            </div>
          )}
        </NavLink>
        <NavLink to="/workout" className="h-14 flex flex-col items-center">
          {location.pathname === "/workout" ? (
            <div className="bg-activeIcon w-20 border-iconPurple border-opacity-20 flex flex-col items-center p-2 rounded-lg">
              <LiaDumbbellSolid className="fill-white text-lg" />
              <p className="text-xs text-white pt-1">Workout</p>
            </div>
          ) : (
            <div className="p-2">
              <LiaDumbbellSolid className=" fill-mediumGray text-lg" />
            </div>
          )}
        </NavLink>
        <NavLink to="/diet" className="h-14 flex flex-col items-center">
          {location.pathname === "/diet" ? (
            <div className="bg-activeIcon w-20 border-iconPurple border-opacity-20 flex flex-col items-center p-2 rounded-lg">
              <PiBowlFood className="fill-white text-lg" />
              <p className="text-xs text-white pt-1">Diets</p>
            </div>
          ) : (
            <div className="p-2">
              <PiBowlFood className=" fill-mediumGray text-lg" />
            </div>
          )}
        </NavLink>
        <NavLink to="/goal" className="h-14 flex flex-col items-center">
          {location.pathname === "/goal" ? (
            <div className="bg-activeIcon w-20 border-iconPurple border-opacity-20 flex flex-col items-center p-2 rounded-lg">
              <GoGoal className="fill-white text-lg" />
              <p className="text-xs text-white pt-1">Goals</p>
            </div>
          ) : (
            <div className="p-2">
              <GoGoal className=" fill-mediumGray text-lg" />
            </div>
          )}
        </NavLink>
      </div>
      <div
        onClick={() => dispatch(logoutHandler(navigate))}
        className="h-14 flex flex-col items-center"
      >
        <LuLogOut className="stroke-red cursor-pointer" />
        <p className="text-xs text-red pt-1 cursor-pointer">Logout</p>
      </div>
    </div>
  );
};

export default SideBar;
