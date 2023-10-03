import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

export const DietModal = ({ data, setData, setShowModal, submitHandler }) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-bgModal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute position-center w-72">
        <div className="relative flex flex-col gap-4 mx-auto bg-white  shadow-md rounded-lg p-6 ">
          <div
            onClick={() => setShowModal(false)}
            className="absolute -top-2 -right-2"
          >
            <MdCancel className="w-7 h-7 fill-primary bg-slate-50  rounded-full" />
          </div>
          <h2 className="text-lg text-primary font-semibold">New Diet</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full  py-1.5 px-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="name">Diet Name:</label>
              <input
                type="text"
                placeholder="Diet Name"
                id="name"
                name="name"
                value={data?.name}
                className="w-full outline-0 bg-transparent"
                onChange={(e) =>
                  setData((d) => ({ ...d, name: e.target.value }))
                }
                required
              />
            </div>
            <div className="w-full  py-1.5 px-5 mt-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="calories">Calories in grams:</label>
              <input
                type="number"
                placeholder="Calories in grams"
                id="calories"
                name="Calories in grams"
                value={data?.calories}
                className="w-full outline-0 bg-transparent"
                onChange={(e) =>
                  setData((d) => ({ ...d, calories: e.target.value }))
                }
                required
              />
            </div>

            <div className="w-full  py-1.5 px-5 mt-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="protein">Proteins in grams:</label>
              <input
                type="number"
                placeholder="Proteins in grams"
                id="protein"
                name="Protein in grams"
                value={data?.protein}
                className="w-full outline-0 bg-transparent"
                onChange={(e) =>
                  setData((d) => ({ ...d, protein: e.target.value }))
                }
              />
            </div>

            <div className="w-full  py-1.5 px-5 mt-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="carbohydrates">Carbohydrates in grams:</label>
              <input
                type="number"
                placeholder="Carbohydrates in grams"
                id="carbohydrates"
                name="Carbohydrates in grams"
                value={data?.carbohydrates}
                className="w-full outline-0 bg-transparent"
                onChange={(e) =>
                  setData((d) => ({ ...d, carbohydrates: e.target.value }))
                }
              />
            </div>

            <div className="w-full  py-1.5 px-5 mt-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="fat">Fats in grams:</label>
              <input
                type="number"
                placeholder="Fat in grams"
                id="fat"
                name="Fats in grams"
                value={data?.fat}
                className="w-full outline-0 bg-transparent"
                onChange={(e) =>
                  setData((d) => ({ ...d, fat: e.target.value }))
                }
              />
            </div>

            <button
              onClick={() => submitHandler(data)}
              className="w-full inline-block p-1.5 mt-7 font-semibold text-white bg-primary rounded-lg hover:bg-primaryDark active:bg-primary"
            >
              Add Diet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};