import React, { useEffect } from "react";
import NavBar from "../../layout/navBar/NavBar";
import dashboard from "../../assets/dashboard.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  calcTotalCaloriesBurned,
  calcTotalCaloriesConsumed,
  calcGoalCalories,
} from "../../store/activityStore/action";
import {
  FaFire,
  FaUtensils,
  FaBullseye,
  FaHourglassHalf,
} from "react-icons/fa";
import Chart from "../../components/chart/Chart";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.loggedUser);
  const {
    totalCaloriesBurned,
    totalCaloriesConsumed,
    totalCaloriesGoals,
    totalCaloriesRemaining,
  } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(calcTotalCaloriesBurned(user?._id));
    dispatch(calcTotalCaloriesConsumed(user?._id));
    dispatch(calcGoalCalories(user?._id));
  }, []);

  const username = user?.username[0].toUpperCase() + user?.username.slice(1);
  const chartData = {
    totalCaloriesBurned,
    totalCaloriesConsumed,
    totalCaloriesGoals,
    totalCaloriesRemaining,
  };

  return (
    <div className="w-calc-mainBody p-1">
      <NavBar title="Dashboard" />
      <div className="h-calc-mainbody overflow-y-scroll hide-scrollbar">
        <div className="flex items-center gap-10 py-10 lg:gap-16 p-5 lg:py-5 m-4 mt-14 mr-8 rounded-xl bg-iconPurple bg-opacity-20  border-2 border-iconPurple border-opacity-20">
          <div className="w-full">
            <h2 className="text-3xl mb-4 text-white">
              Hi, <span className="font-semibold text-blue">{username}!!</span>
            </h2>
            <p className="text-mediumGray xl:w-5/6 tracking-wider">
              Live a healthier lifestyle by achieving your fitness goals. Plan
              workouts, monitor nutrition, and set new goals. Welcome to your
              personalized fitness hub where you take control of your health and
              well-being.
            </p>
          </div>
          <img
            src={dashboard}
            className="w-2/5 lg:w-w30 hidden lg:block -mt-16"
          />
        </div>

        <h2 className="text-orange m-6 mt-14 mb-8 text-2xl">
          Calorie Analytics
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5 m-4 mr-8 border-2 border-iconPurple border-opacity-20 md:p-4 rounded-lg">
          {(totalCaloriesRemaining ||
            totalCaloriesBurned ||
            totalCaloriesConsumed ||
            totalCaloriesGoals) && <Chart chartData={chartData} />}
          <div className="flex flex-col gap-5">
            <div className="w-full  text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
              <h2 className="text-blue">Total Calories Burned</h2>
              <p className="flex items-center flex-wrap gap-2 text-white text-xl my-4">
                <FaFire className="fill-red" />
                {totalCaloriesBurned}
              </p>
            </div>
            <div className="w-full text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
              <h2 className="text-blue">Total Calories Consumed</h2>
              <p className="flex items-center gap-2 text-white text-xl my-4">
                <FaUtensils className="fill-orange" /> {totalCaloriesConsumed}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-full text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
              <h2 className="text-blue">Total Calories Goal</h2>
              <p className="flex items-center gap-2 text-white text-xl my-4">
                <FaBullseye className="fill-green" />
                {totalCaloriesGoals}
              </p>
            </div>
            <div className="w-full text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
              <h2 className="text-blue">Remaining Calories to Goal</h2>
              <p className="flex items-center gap-2 text-white text-xl my-4">
                <FaHourglassHalf className="fill-red" />
                {totalCaloriesRemaining}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
