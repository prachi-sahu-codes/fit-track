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

const Goal = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    targetDate: "2023-10-04",
    targetCalories: 0,
    status: "",
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const goalData = useSelector((state) => state.activity.goals);
  const user = useSelector((state) => state.auth.loggedUser);
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
            <ul className="flex gap-7 justify-between ml-4 mr-7 flex-wrap mt-8">
              {goalData?.map((goal) => (
                <li
                  key={goal._id}
                  className="w-72 text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg"
                >
                  <h2 className="text-blue font-semibold">{goal.name}</h2>
                  <p className="my-2 text-sm">
                    Description:{" "}
                    <span className="text-white text-lg pl-2">
                      {goal.description}
                    </span>
                  </p>
                  <p className="text-sm">
                    Target Date:{" "}
                    <span className="text-white text-lg pl-2">
                      {goal.targetDate}
                    </span>
                  </p>
                  <p className="my-2 text-sm">
                    Target Calories:{" "}
                    <span className="text-white text-lg pl-2">
                      {goal.targetCalories}
                    </span>
                  </p>
                  <p className="text-sm">
                    Status:{" "}
                    <span className="text-white text-lg pl-2">
                      {goal.status}
                    </span>
                  </p>
                  <button
                    onClick={() => dispatch(deleteGoal(goal._id))}
                    className="w-full inline-block p-1.5 mt-5 text-white bg-blue rounded-lg hover:bg-red active:bg-blue"
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
