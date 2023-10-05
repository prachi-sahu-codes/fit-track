import React, { useEffect, useState } from "react";
import NavBar from "../../layout/navBar/NavBar";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGoals,
  createGoal,
  deleteGoal,
} from "../../store/activityStore/action";
import { toast } from "react-toastify";
import { GoalModal } from "../../components/modal/GoalModal";
import { FaCheck, FaTimes, FaBan } from "react-icons/fa";
import { ImStopwatch } from "react-icons/im";
const Goal = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: "",
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const goalData = useSelector((state) => state?.activity?.goals);
  const user = useSelector((state) => state?.auth?.loggedUser);
  useEffect(() => {
    dispatch(getAllGoals(user._id));
  }, []);

  const submitHandler = () => {
    if (data.name && data.targetCalories && data.targetDate && data.status) {
      dispatch(createGoal({ ...data, userId: user._id }, setData));
      setShowModal(false);
    } else {
      toast.error("Please fill in all fields with valid details.!");
    }
  };

  return (
    <div className="w-calc-mainBody p-1">
      <NavBar title="Goals" />
      <div className="h-calc-mainbody overflow-y-scroll hide-scrollbar">
        <div className="w-96 flex justify-between items-center m-auto mt-4">
          <h1 className="text-white">Add Your Goal</h1>
          <div
            className="bg-primary p-2 rounded-lg cursor-pointer hover:bg-primaryDark active:bg-primary"
            onClick={() => setShowModal(true)}
          >
            {" "}
            <AiOutlinePlus className="text-xl fill-white" />
          </div>
        </div>
        {goalData?.length > 0 ? (
          <div>
            <h2 className="text-orange my-6 text-2xl">Your Goals</h2>
            <hr className="h-2px bg-primaryDark opacity-30" />
            <ul className="fw-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 px-4 pr-7">
              {goalData?.map((goal) => (
                <li
                  key={goal._id}
                  className="w-full flex flex-col justify-between text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg"
                >
                  <div>
                    <h2
                      className={`flex items-center gap-2 text-blue mb-4 text-xl font-semibold underline underline-offset-2 ${
                        goal.status === "In Progress"
                          ? "text-yellow"
                          : goal.status === "Acheived"
                          ? "text-green"
                          : "text-orange"
                      }`}
                    >
                      {goal.status === "In Progress" ? (
                        <ImStopwatch />
                      ) : goal.status === "Acheived" ? (
                        <FaCheck />
                      ) : goal.status === "Failed" ? (
                        <FaTimes />
                      ) : (
                        <FaBan />
                      )}

                      {goal.name}
                    </h2>
                    <p className="my-2 text-sm">
                      Description:{" "}
                      <span className="text-white text-base pl-2">
                        {goal.description}
                      </span>
                    </p>
                    <p className="text-sm">
                      Target Date:{" "}
                      <span className="text-white text-base pl-2">
                        {goal.targetDate}
                      </span>
                    </p>
                    <p className="my-2 text-sm">
                      Target Calories:{" "}
                      <span className="text-white text-base pl-2">
                        {goal.targetCalories} cals
                      </span>
                    </p>
                    <p className="text-sm">
                      Status:{" "}
                      <span className="text-white text-base pl-2">
                        {goal.status}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(deleteGoal(goal._id))}
                    className="w-full inline-block p-1.5 mt-5 text-white bg-blue rounded-lg hover:bg-blueDark active:bg-blue"
                  >
                    Delete Goal
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-xl text-lightGray text-center m-8">
            No Goals added yet!!
          </p>
        )}

        {showModal && (
          <GoalModal
            data={data}
            setData={setData}
            setShowModal={setShowModal}
            submitHandler={submitHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Goal;
