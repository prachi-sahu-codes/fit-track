import React, { useEffect } from "react";
import NavBar from "../../layout/navBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  calcTotalCaloriesBurned,
  calcTotalCaloriesConsumed,
  calcGoalCalories,
} from "../../store/activityStore/action";
import { FaFire, FaUtensils, FaBullseye, FaHourglassHalf } from "react-icons/fa";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(calcTotalCaloriesBurned(state.auth.loggedUser?._id));
    dispatch(calcTotalCaloriesConsumed(state.auth.loggedUser?._id));
    dispatch(calcGoalCalories(state.auth.loggedUser?._id));
  }, []);
  return (
    <div className="w-calc-mainBody p-1">
      <NavBar title="Dashboard" />
      <div className="flex gap-5">
        <div className="w-72 text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
          <h2 className="text-blue">Total Calories Burned</h2>
          <p className="flex items-center gap-2 text-white text-xl my-4">
            <FaFire className="fill-red"/>
            {state?.activity?.totalCaloriesBurned}
          </p>
        </div>
        <div className="w-72 text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
          <h2 className="text-blue">Total Calories Consumed</h2>
          <p className="flex items-center gap-2 text-white text-xl my-4">
           <FaUtensils className="fill-orange"/> {state?.activity?.totalCaloriesConsumed}
          </p>
        </div>
        <div className="w-72 text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
          <h2 className="text-blue">Total Calories Goal</h2>
          <p className="flex items-center gap-2 text-white text-xl my-4">
           <FaBullseye className="fill-green"/>{state?.activity?.totalCaloriesGoals}
          </p>
        </div>
        <div className="w-72 text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
          <h2 className="text-blue">Remaining Calories to Goal</h2>
          <p className="flex items-center gap-2 text-white text-xl my-4">
            <FaHourglassHalf className="fill-red"/>{state?.activity?.totalCaloriesRemaining}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
