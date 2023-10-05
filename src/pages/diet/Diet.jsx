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
import { GiFruitBowl, GiOakLeaf, GiBowlOfRice } from "react-icons/gi";

const Diet = () => {
  const [data, setData] = useState({
    name: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    category: "",
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.activity.diets);
  const user = useSelector((state) => state.auth.loggedUser);
  useEffect(() => {
    dispatch(getAllDiets(user._id));
  }, []);

  const submitHandler = () => {
    if (data.name && data.calories) {
      dispatch(createDiet({ ...data, userId: user._id }, setData));
      setShowModal(false);
    } else {
      toast.error("Please fill in all fields with valid details.!");
    }
  };

  return (
    <div className="w-calc-mainBody p-1">
      <NavBar title="Diets" />
      <div className="h-calc-mainbody overflow-y-scroll hide-scrollbar">
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
            <ul className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 px-4 pr-7">
              {foodData?.map((foodDiet) => (
                <li
                  key={foodDiet._id}
                  className="w-full text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg"
                >
                  <h2
                    className={`flex items-center gap-2 text-blue text-xl font-semibold underline underline-offset-2 mb-4 ${
                      foodDiet.category === "Dish"
                        ? "text-orange"
                        : foodDiet.category === "Fruit"
                        ? "text-yellow"
                        : "text-green"
                    }`}
                  >
                    {foodDiet.category === "Vegetable" ? (
                      <GiOakLeaf />
                    ) : foodDiet.category === "Fruit" ? (
                      <GiFruitBowl />
                    ) : (
                      <GiBowlOfRice />
                    )}
                    {foodDiet.name}
                  </h2>
                  <p className="my-2 text-sm">
                    Calories:{" "}
                    <span className="text-white text-base pl-2">
                      {foodDiet.calories} cals
                    </span>
                  </p>
                  <p className="text-sm">
                    Proteins:{" "}
                    <span className="text-white text-base pl-2">
                      {foodDiet.protein} gm
                    </span>
                  </p>
                  <p className="my-2 text-sm">
                    Carbohydrates:{" "}
                    <span className="text-white text-base pl-2">
                      {foodDiet.carbohydrates} gm
                    </span>
                  </p>
                  <p className="text-sm">
                    Fats:{" "}
                    <span className="text-white text-base pl-2">
                      {foodDiet.fat} gm
                    </span>
                  </p>
                  <p className="text-sm mt-2">
                    Category:{" "}
                    <span className="text-white text-base pl-2">
                      {foodDiet.category}
                    </span>
                  </p>
                  <button
                    onClick={() => dispatch(deleteDiet(foodDiet._id))}
                    className="w-full inline-block p-1.5 mt-5 text-white bg-blue rounded-lg hover:bg-blueDark active:bg-blue"
                  >
                    Delete Diet
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-xl text-lightGray text-center m-8">
            No Diets added yet!!
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
    </div>
  );
};

export default Diet;
