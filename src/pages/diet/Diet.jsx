import React, { useEffect, useState } from "react";
import NavBar from "../../layout/navBar/NavBar";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDiets,
  createDiet,
  deleteDiet,
} from "../../store/activityStore/action";
import { toast } from "react-toastify";
import { DietModal } from "../../components/modal/DietModal";

const Diet = () => {
  const [data, setData] = useState({
    name: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.activity.diets);
  const user = useSelector((state) => state.auth.loggedUser);
  // useEffect(() => {
  //   dispatch(getAllDiets(user._id));
  // }, []);

  const submitHandler = () => {
    if (data.name && data.duration && data.foodDietrciseType) {
      dispatch(createDiet({ ...data, userId: user._id }, setData));
      setShowModal(false);
    } else {
      toast.error("Please fill in all fields with valid details.!");
    }
  };

  return (
    <div className="w-calc-mainBody p-1">
      <NavBar title="Diets" />
      <div className="w-96 flex justify-between items-center m-auto mt-4">
        <h1 className="text-white">Add Your Diet</h1>
        <div
          className="bg-primary p-2 rounded-lg cursor-pointer hover:bg-primaryDark active:bg-primary"
          onClick={() => setShowModal(true)}
        >
          {" "}
          <AiOutlinePlus className="text-xl fill-white" />
        </div>
      </div>
      {foodData?.length > 0 ? (
        <div>
          <h2 className="text-orange my-6 text-2xl">Your Diets</h2>
          <hr className="h-2px bg-primaryDark opacity-30" />
          <ul className="flex gap-8 mt-8">
            {foodData?.map((foodDiet) => (
              <li className="w-72 text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg">
                <h2 className="text-blue font-semibold">{foodDiet.name}</h2>
                <p className="my-2 text-sm">
                  Duration:{" "}
                  <span className="text-white text-lg pl-2">
                    {foodDiet.duration} minutes
                  </span>
                </p>
                <p className="text-sm">
                  Calories Burned:{" "}
                  <span className="text-white text-lg pl-2">
                    {foodDiet.caloriesBurned} calories
                  </span>
                </p>
                <button
                  onClick={() => dispatch(deleteDiet(foodDiet._id))}
                  className="w-full inline-block p-1.5 mt-5 text-white bg-blue rounded-lg hover:bg-red active:bg-blue"
                >
                  Delete Diet
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-xl text-lightGray text-center m-8">
          No Diet added yet!!
        </p>
      )}

      {showModal && (
        <DietModal
          data={data}
          setData={setData}
          setShowModal={setShowModal}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
};

export default Diet;
