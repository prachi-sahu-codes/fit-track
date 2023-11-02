import React, { useEffect, useState } from "react";
import NavBar from "../../layout/navBar/NavBar";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllExercises,
  createExercises,
  updateExercise,
  deleteExercise,
} from "../../store/activityStore/action";
import { toast } from "react-toastify";
import { WorkoutModal } from "../../components/modal/WorkoutModal";
import { BiRun } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { debounce } from "../../utils/utils";

const Workout = () => {
  const [data, setData] = useState({ name: "", duration: 0, exerciseType: "" });
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState({ type: "add", id: "" });

  const dispatch = useDispatch();
  const exerciseData = useSelector((state) => state.activity.exercises);

  const [searchData, setSearchData] = useState({
    filteredArr: exerciseData,
    searchTerm: "",
  });
  const user = useSelector((state) => state.auth.loggedUser);
  useEffect(() => {
    dispatch(getAllExercises(user._id));
  }, []);

  const debouncedFilter = debounce((term) => {
    const filtered = exerciseData.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchData((prev) => ({ ...prev, filteredArr: filtered }));
  }, 500);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchData((prev) => ({ ...prev, searchTerm: newSearchTerm }));
    debouncedFilter(newSearchTerm);
  };

  const submitHandler = () => {
    if (data.name && data.duration && data.exerciseType) {
      if (actionType.type === "add") {
        dispatch(createExercises({ ...data, userId: user._id }, setData));
      } else {
        dispatch(
          updateExercise(actionType.id, { ...data, userId: user._id }, setData)
        );
      }
      setShowModal(false);
    } else {
      toast.error("Please fill in all fields with valid details.!");
    }
  };

  return (
    <div className="w-calc-mainBody p-1">
      <NavBar title="Workouts" />
      <div className="h-calc-mainbody overflow-y-scroll hide-scrollbar">
        <div className="flex justify-between items-center gap-2 m-2 mt-4">
          <input
            type="text"
            placeholder="Search"
            value={searchData.searchTerm}
            onChange={handleSearchChange}
            className="w-full text-white p-1 px-4 border-2 border-iconPurple border-opacity-50 rounded-md bg-transparent"
          />

          <div
            className="flex justify-center items-center gap-3 w-72 bg-primary p-2 rounded-lg cursor-pointer hover:bg-primaryDark active:bg-primary text-white"
            onClick={() => {
              setData({
                name: "",
                duration: 0,
                exerciseType: "",
              });
              setActionType(() => ({ type: "add", id: "" }));
              setShowModal(true);
            }}
          >
            <span>Add New Exercise</span>
            <AiOutlinePlus className="text-xl fill-white" />
          </div>
        </div>
        {searchData.filteredArr.length > 0 ? (
          <div>
            <h2 className="text-orange my-6 text-2xl">Your Exercises</h2>
            <hr className="h-2px bg-primaryDark opacity-30" />
            <ul className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 px-4 pr-7">
              {searchData.filteredArr.map((exe) => (
                <li
                  key={exe._id}
                  className="w-full text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="flex items-center gap-2 text-blue text-xl font-semibold underline underline-offset-2">
                      <BiRun className="shrink-0" />
                      {exe.name}
                    </h2>
                    <button
                      className=" text-blue text-lg"
                      title="edit"
                      onClick={() => {
                        setData(() => ({
                          name: exe.name,
                          duration: exe.duration,
                          exerciseType: exe.exerciseType,
                        }));
                        setActionType(() => ({ type: "update", id: exe._id }));
                        setShowModal(true);
                      }}
                    >
                      <MdEdit />
                    </button>
                  </div>
                  <p className="my-2 text-sm">
                    Duration:{" "}
                    <span className="text-white text-base pl-2">
                      {exe.duration} min
                    </span>
                  </p>
                  <p className="text-sm">
                    Calories Burned:{" "}
                    <span className="text-white text-base pl-2">
                      {exe.caloriesBurned} cals
                    </span>
                  </p>
                  <button
                    onClick={() => dispatch(deleteExercise(exe._id))}
                    className="w-full inline-block p-1.5 mt-5 text-white bg-blue rounded-lg hover:bg-blueDark active:bg-blue"
                  >
                    Delete Exercise
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-xl text-lightGray text-center m-8">
            No Exercises added yet!!
          </p>
        )}

        {showModal && (
          <WorkoutModal
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

export default Workout;
