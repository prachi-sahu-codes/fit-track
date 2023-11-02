import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import NavBar from "../../layout/navBar/NavBar";
import { GiFruitBowl, GiOakLeaf, GiBowlOfRice } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import noData from "../../assets/noData.svg";
import { debounce } from "../../utils/utils";
import { DietModal } from "../../components/modal/DietModal";
import {
  getAllDiets,
  createDiet,
  updateDiet,
  deleteDiet,
} from "../../store/activityStore/action";

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
  const [actionType, setActionType] = useState({ type: "add", id: "" });
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.activity.diets);
  const user = useSelector((state) => state.auth.loggedUser);
  const [searchData, setSearchData] = useState({
    filteredArr: foodData,
    searchTerm: "",
  });
  useEffect(() => {
    dispatch(getAllDiets(user._id));
  }, []);

  useEffect(() => {
    setSearchData((prev) => ({ ...prev, filteredArr: foodData }));
  }, [foodData]);

  const debouncedFilter = debounce((term) => {
    const filtered = foodData.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
    );

    setSearchData((prev) => ({ ...prev, filteredArr: filtered }));
  }, 500);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchData((prev) => ({ ...prev, searchTerm: newSearchTerm }));
    debouncedFilter(newSearchTerm);
  };

  const submitHandler = () => {
    if (data.name && data.calories) {
      if (actionType.type === "add") {
        dispatch(createDiet({ ...data, userId: user._id }, setData));
      } else {
        dispatch(
          updateDiet(actionType.id, { ...data, userId: user._id }, setData)
        );
      }
      setShowModal(false);
    } else {
      toast.error("Please fill in all fields with valid details.!");
    }
  };

  return (
    <div className="w-calc-mainBody p-1">
      <NavBar title="Diets" />
      <div className="h-calc-mainbody overflow-y-scroll hide-scrollbar">
        <div className="flex justify-between items-center gap-4 m-2 mt-4">
          <input
            type="text"
            placeholder="Search Diets"
            value={searchData.searchTerm}
            onChange={handleSearchChange}
            className="w-full text-white p-2 px-4 border-2 border-iconPurple border-opacity-50 rounded-md bg-transparent outline-none focus:border-2 focus:border-primary"
          />
          <button
            className="flex justify-center items-center gap-3 w-72 bg-primary p-2 rounded-lg cursor-pointer hover:bg-primaryDark active:bg-primary text-white"
            onClick={() => {
              setData({
                name: "",
                calories: 0,
                protein: 0,
                carbohydrates: 0,
                fat: 0,
                category: "",
              });
              setActionType(() => ({ type: "add", id: "" }));
              setShowModal(true);
            }}
          >
            <AiOutlinePlus className="text-xl fill-white" />
            <span>Add New Diet</span>
          </button>
        </div>
        {searchData.filteredArr?.length > 0 ? (
          <div>
            <h2 className="text-orange my-6 text-2xl">Your Diets</h2>
            <hr className="h-2px bg-primaryDark opacity-30" />
            <ul className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 px-4 pr-7">
              {searchData.filteredArr?.map((foodDiet) => (
                <li
                  key={foodDiet._id}
                  className="w-full flex flex-col justify-between text-mediumGray bg-bgBox border-2 border-iconPurple border-opacity-20 p-4 rounded-lg"
                >
                  <div>
                    <h2
                      className={`flex items-center mb-4 gap-2 text-blue text-xl font-semibold underline underline-offset-2 ${
                        foodDiet.category === "Dish"
                          ? "text-orange"
                          : foodDiet.category === "Fruit"
                          ? "text-yellow"
                          : "text-green"
                      }`}
                    >
                      {foodDiet.category === "Vegetable" ? (
                        <GiOakLeaf className="shrink-0" />
                      ) : foodDiet.category === "Fruit" ? (
                        <GiFruitBowl className="shrink-0" />
                      ) : (
                        <GiBowlOfRice className="shrink-0" />
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
                  </div>
                  <div className="flex gap-4 mt-5">
                    <button
                      className="w-full flex items-center justify-center gap-2 p-1.5 rounded-lg hover:bg-blueDark active:bg-transparent bg-transparent border-2 border-blue hover:bg-opacity-25 text-blue"
                      onClick={() => {
                        setData(() => ({
                          name: foodDiet.name,
                          calories: foodDiet.calories,
                          protein: foodDiet.protein,
                          carbohydrates: foodDiet.carbohydrates,
                          fat: foodDiet.fat,
                          category: foodDiet.category,
                        }));
                        setActionType(() => ({
                          type: "update",
                          id: foodDiet._id,
                        }));
                        setShowModal(true);
                      }}
                    >
                      <MdOutlineEdit />
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteDiet(foodDiet._id))}
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
              No Diets added yet!!
            </p>
          </div>
        )}

        {showModal && (
          <DietModal
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

export default Diet;
