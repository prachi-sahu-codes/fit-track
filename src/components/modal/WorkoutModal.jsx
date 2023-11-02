import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import { exeType } from "./data/exeType";

export const WorkoutModal = ({
  data,
  setData,
  setShowModal,
  submitHandler,
  actionType,
}) => {
  
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
          <h2 className="flex gap-2 text-lg text-white font-semibold mb-3">
            <span>{actionType.type === "add" ? "New" : "Update"}</span>
            Exercise
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="text-lightGray">
            <div className="w-full  py-1.5 px-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="name" className="text-blue">
                Exercise Name:
              </label>
              <input
                type="text"
                placeholder="Exercise Name"
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
              <label htmlFor="duration" className="text-blue">
                Duration in minutes:
              </label>
              <input
                type="number"
                placeholder="Duration in minutes"
                id="duration"
                name="duration in minutes"
                value={data?.duration}
                className="w-full outline-0 bg-transparent"
                onChange={(e) =>
                  setData((d) => ({ ...d, duration: e.target.value }))
                }
                required
              />
            </div>
            <div className="w-full py-1.5 px-5 mt-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="exerciseType" className="text-blue">
                Exercise Type:
              </label>
              <select
                className="w-full bg-bgWhole"
                value={data?.exerciseType}
                onChange={(e) =>
                  setData((d) => ({ ...d, exerciseType: e.target.value }))
                }
              >
                <option value="" selected disabled>
                  Choose Type:
                </option>
                {exeType.map((exe) => (
                  <option key={exe.id} value={exe.value}>
                    {exe.text}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => submitHandler(data)}
              className="flex justify-center items-center gap-2 w-full p-1.5 mt-7 font-semibold text-white bg-primary rounded-lg hover:bg-primaryDark active:bg-primary"
            >
              <span>{actionType.type === "add" ? "Add" : "Update"}</span>{" "}
              Exercise
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
