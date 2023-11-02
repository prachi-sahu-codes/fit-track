import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaCheck, FaTimes, FaBan } from "react-icons/fa";
import { ImStopwatch } from "react-icons/im";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import NavBar from "../../layout/navBar/NavBar";
import noData from "../../assets/noData.svg";
import { debounce } from "../../utils/utils";
import { GoalModal } from "../../components/modal/GoalModal";
import {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../../store/activityStore/action";

const Goal = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState({ type: "add", id: "" });
  const dispatch = useDispatch();
  const goalData = useSelector((state) => state?.activity?.goals);
  const user = useSelector((state) => state?.auth?.loggedUser);
  const [searchData, setSearchData] = useState({
    filteredArr: goalData,
    searchTerm: "",
  });
  useEffect(() => {
    dispatch(getAllGoals(user._id));
  }, []);

  useEffect(() => {
    setSearchData((prev) => ({ ...prev, filteredArr: goalData }));
  }, [goalData]);

  const debouncedFilter = debounce((term) => {
    const filtered = goalData.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.status.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase())
    );

    setSearchData((prev) => ({ ...prev, filteredArr: filtered }));
  }, 500);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchData((prev) => ({ ...prev, searchTerm: newSearchTerm }));
    debouncedFilter(newSearchTerm);
  };

  const submitHandler = () => {
    if (data.name && data.targetCalories && data.targetDate && data.status) {
      if (actionType.type === "add") {
        dispatch(createGoal({ ...data, userId: user._id }, setData));
      } else {
        dispatch(
          updateGoal(actionType.id, { ...data, userId: user._id }, setData)
        );
      }
      setShowModal(false);
    } else {
      toast.error("Please fill in all fields with valid details.!");
    }
  };

  return (
    <div className="w-calc-mainBody p-1">
      <NavBar title="Goals" />
      <div className="h-calc-mainbody overflow-y-scroll hide-scrollbar">
        <div className="flex justify-between items-center gap-4 m-2 mt-4">
          <input
            type="text"
            placeholder="Search Goal"
            value={searchData.searchTerm}
            onChange={handleSearchChange}
            className="w-full text-white p-2 px-4 border-2 border-iconPurple border-opacity-50 rounded-md bg-transparent outline-none focus:border-2 focus:border-primary"
          />
          <button
            className="flex justify-center items-center gap-3 w-72 bg-primary p-2 rounded-lg cursor-pointer hover:bg-primaryDark active:bg-primary text-white"
            onClick={() => {
              setData({
                name: "",
                description: "",
                targetDate: "",
                targetCalories: 0,
                status: "",
              });
              setActionType(() => ({ type: "add", id: "" }));
              setShowModal(true);
            }}
          >
            <AiOutlinePlus className="text-xl fill-white" />
            Add New Goal
          </button>
        </div>
        {searchData.filteredArr?.length > 0 ? (
          <div>
            <h2 className="text-orange my-6 text-2xl">Your Goals</h2>
            <hr className="h-2px bg-primaryDark opacity-30" />
            <ul className="fw-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 px-4 pr-7">
              {searchData.filteredArr?.map((goal) => (
                <li
                  key={goal._id}
                  className="w-full flex flex-col justify-between text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg"
                >
                  <div>
                    <h2
                      className={`flex items-center gap-2 text-blue text-xl font-semibold underline underline-offset-2 mb-4 ${
                        goal.status === "In Progress"
                          ? "text-yellow"
                          : goal.status === "Acheived"
                          ? "text-green"
                          : "text-orange"
                      }`}
                    >
                      {goal.status === "In Progress" ? (
                        <ImStopwatch className="shrink-0" />
                      ) : goal.status === "Acheived" ? (
                        <FaCheck className="shrink-0" />
                      ) : goal.status === "Failed" ? (
                        <FaTimes className="shrink-0" />
                      ) : (
                        <FaBan className="shrink-0" />
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
                  <div className="flex gap-4 mt-5">
                    <button
                      className="w-full flex items-center justify-center gap-2 p-1.5 rounded-lg hover:bg-blueDark active:bg-transparent bg-transparent border-2 border-blue hover:bg-opacity-25 text-blue"
                      title="edit"
                      onClick={() => {
                        setData(() => ({
                          name: goal.name,
                          description: goal.description,
                          targetDate: goal.targetDate,
                          targetCalories: goal.targetCalories,
                          status: goal.status,
                        }));
                        setActionType(() => ({
                          type: "update",
                          id: goal._id,
                        }));
                        setShowModal(true);
                      }}
                    >
                      <MdOutlineEdit /> Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteGoal(goal._id))}
                      className="w-full flex items-center justify-center gap-2 p-1.5 text-orange bg-transparent border-2 border-orange rounded-lg hover:bg-orange hover:bg-opacity-25 active:bg-transparent"
                    >
                      <AiOutlineDelete />
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <img src={noData} className="w-1/5 m-auto mt-20" />
          <p className="text-xl text-lightGray text-center m-8">
            No Goals added yet!!
          </p>
          </div>
        )}

        {showModal && (
          <GoalModal
            data={data}
            setData={setData}
            setShowModal={setShowModal}
            submitHandler={submitHandler}
            actionType={actionType}
          />
        )}
      </div>
    </div>
  );
};

export default Goal;
