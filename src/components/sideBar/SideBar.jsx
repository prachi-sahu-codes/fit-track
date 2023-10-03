import React, { useState } from "react";
import dumbbell from "../../assets/dumbbell.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { GoHome, GoGoal } from "react-icons/go";
import { LiaDumbbellSolid } from "react-icons/lia";
import { PiBowlFood } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../../store/authStore/action";

const SideBar = () => {
  const path = window.location.pathname;
  const [newActiveLink, setNewActiveLink] = useState(path);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between items-center p-2 w-28 h-calc-sideBar m-4 rounded-lg border-2 border-iconPurple border-opacity-20 bg-bgBox">
      <img src={dumbbell} className="w-12 h-12 bg-blue rounded-xl p-2" />
      <div>
        <NavLink to="/dashboard">
          {newActiveLink === "/dashboard" ? (
            <div>
              <GoHome className="stroke-mediumGray fill-mediumGray" />
              <p>Workout</p>
            </div>
          ) : (
            <div>
              <GoHome className="stroke-mediumGray fill-mediumGray" />
            </div>
          )}
        </NavLink>
        <NavLink to="/workout">
          {newActiveLink === "/workout" ? (
            <div>
              <p>Workout</p>
            </div>
          ) : (
            <div>
              <LiaDumbbellSolid className="stroke-mediumGray fill-mediumGray" />
              icon
            </div>
          )}
        </NavLink>
        <NavLink to="/diet">
          {newActiveLink === "/diet" ? (
            <div>
              <p>Diets</p>
            </div>
          ) : (
            <div>
              <PiBowlFood className="stroke-mediumGray fill-mediumGray" /> icon
            </div>
          )}
        </NavLink>
        <NavLink to="/goal">
          {newActiveLink === "/goal" ? (
            <div>icon</div>
          ) : (
            <div>
              <GoGoal className="fill-mediumGray" />

              <p>Goals</p>
            </div>
          )}
        </NavLink>
      </div>
      <div onClick={() => dispatch(logoutHandler(navigate))}>
        <LuLogOut className="stroke-red" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default SideBar;
