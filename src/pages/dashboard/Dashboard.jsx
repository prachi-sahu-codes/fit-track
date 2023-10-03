import React, { useEffect } from "react";
import NavBar from "../../layout/navBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  calcTotalCaloriesBurned,
  calcTotalCaloriesConsumed,
  calcGoalCalories,
} from "../../store/activityStore/action";

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
          <p className="text-white text-xl my-4">
            {state?.activity?.totalCaloriesBurned}
          </p>
        </div>
        <div className="w-72 text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
          <h2 className="text-blue">Total Calories Consumed</h2>
          <p className="text-white text-xl my-4">
            {state?.activity?.totalCaloriesConsumed}
          </p>
        </div>
        <div className="w-72 text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
          <h2 className="text-blue">Total Calories Goal</h2>
          <p className="text-white text-xl my-4">
            {state?.activity?.totalCaloriesGoals}
          </p>
        </div>
        <div className="w-72 text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
          <h2 className="text-blue">Remaining Calories to Goal</h2>
          <p className="text-white text-xl my-4">
            {state?.activity?.totalCaloriesRemaining}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
