import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../layout/navBar/NavBar";
import { toast } from "react-toastify";
import { BiRun } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { debounce } from "../../utils/utils";
import { WorkoutModal } from "../../components/modal/WorkoutModal";
import {
  getAllExercises,
  createExercises,
  updateExercise,
  deleteExercise,
} from "../../store/activityStore/action";

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

  useEffect(() => {
    setSearchData((prev) => ({ ...prev, filteredArr: exerciseData }));
  }, [exerciseData]);

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
        <div className="flex justify-between items-center gap-4 m-2 mt-4">
          <input
            type="text"
            placeholder="Search Exercises"
            value={searchData.searchTerm}
            onChange={handleSearchChange}
            className="w-full text-white p-2 px-4 border-2 border-iconPurple border-opacity-50 rounded-md bg-transparent outline-none focus:border-2 focus:border-primary"
          />

          <button
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
            <AiOutlinePlus className="text-xl fill-white" />
            <span>Add New Exercise</span>
          </button>
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
                  <h2 className="flex items-center gap-2 text-blue text-xl font-semibold underline underline-offset-2 mb-4">
                    <BiRun className="shrink-0" />
                    {exe.name}
                  </h2>

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
                  <div className="flex gap-4 mt-5">
                    <button
                      onClick={() => {
                        setData(() => ({
                          name: exe.name,
                          duration: exe.duration,
                          exerciseType: exe.exerciseType,
                        }));
                        setActionType(() => ({ type: "update", id: exe._id }));
                        setShowModal(true);
                      }}
                      className="w-full flex items-center justify-center gap-2 p-1.5 rounded-lg hover:bg-blueDark active:bg-transparent bg-transparent border-2 border-blue hover:bg-opacity-25 text-blue"
                    >
                      <MdOutlineEdit />
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteExercise(exe._id))}
                      className="w-full flex items-center justify-center gap-2 p-1.5 text-orange bg-transparent border-2 border-orange rounded-lg hover:bg-orange hover:bg-opacity-25 active:bg-transparent"
                    >
                      <AiOutlineDelete /> Delete
                    </button>
                  </div>
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
