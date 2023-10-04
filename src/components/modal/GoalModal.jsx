import React, { useState } from "react";
import { MdClear } from "react-icons/md";

const statusType = [
  { id: 1, value: "In Progress" },
  { id: 2, value: "Acheived" },
  { id: 3, value: "Abandoned" },
];

export const GoalModal = ({ data, setData, setShowModal, submitHandler }) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-bgModal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute position-center w-72">
        <div className="relative flex flex-col gap-4 mx-auto bg-bgWhole  shadow-md rounded-lg p-6 ">
          <div
            onClick={() => setShowModal(false)}
            className="absolute -top-3 -right-2"
          >
            <MdClear className="w-8 h-8 p-1 fill-lightGray bg-bgWhole rounded-full" />
          </div>
          <h2 className="text-lg text-white font-semibold">New Goal</h2>
          <form onSubmit={(e) => e.preventDefault()} className="text-lightGray">
            <div className="w-full  py-1.5 px-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="name" className="text-blue">Name:</label>
              <input
                type="text"
                placeholder="Goal Name"
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

            <div className="w-full mt-5 py-1.5 px-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="description" className="text-blue">Goal description:</label>
              <textarea
                placeholder="Goal description"
                id="description"
                name="description"
                value={data?.description}
                className="w-full outline-0 bg-transparent"
                onChange={(e) =>
                  setData((d) => ({ ...d, description: e.target.value }))
                }
                required
              />
            </div>

            <div className="w-full py-1.5 px-5 mt-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="targetDate" className="text-blue">Target date:</label>
              <input
                type="date"
                id="targetDate"
                name="trip-start"
                value={data?.targetDate}
                min="2023-10-04"
                max="3000-12-30"
                className="bg-bgWhole w-full"
                onChange={(e) =>
                  setData((d) => ({ ...d, targetDate: e.target.value }))
                }
                required
              />
            </div>

            <div className="w-full  py-1.5 px-5 mt-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="targetCalorie" className="text-blue">Target calorie:</label>
              <input
                type="number"
                placeholder="Target calorie"
                id="targetCalorie"
                name="Target calorie"
                value={data?.targetCalorie}
                className="w-full outline-0 bg-transparent"
                onChange={(e) =>
                  setData((d) => ({ ...d, targetCalories: e.target.value }))
                }
                required
              />
            </div>
            <div className="w-full py-1.5 px-5 mt-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="status" className="text-blue">Status:</label>
              <select
                id="status"
                className="w-full bg-bgWhole"
                onChange={(e) =>
                  setData((d) => ({ ...d, status: e.target.value }))
                }
              >
                <option disabled selected className="text-gray">
                  Choose Type:
                </option>
                {statusType.map((status) => (
                  <option key={status.id} value={status.value}>
                    {status.value}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => submitHandler(data)}
              className="w-full inline-block p-1.5 mt-7 font-semibold text-white bg-primary rounded-lg hover:bg-primaryDark active:bg-primary"
            >
              Add Goal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
