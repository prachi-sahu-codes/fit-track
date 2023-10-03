import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const exeType = [
  { id: 1, value: "running", text: "Running" },
  { id: 2, value: "cycling", text: "Cycling" },
  { id: 3, value: "swimming", text: "Swimming" },
  { id: 4, value: "walking", text: "Walking" },
  { id: 5, value: "other", text: "Other" },
];

export const WorkoutModal = ({
  data,
  setData,
  setShowModal,
  submitHandler,
}) => {
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
          <h2 className="text-lg text-primary font-semibold">New Exercise</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full  py-1.5 px-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="name">Name:</label>
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
              <label htmlFor="duration">Duration in minutes:</label>
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
              <label htmlFor="exerciseType">Exercise Type:</label>
              <select
                className="w-full"
                onChange={(e) =>
                  setData((d) => ({ ...d, exerciseType: e.target.value }))
                }
              >
                <option disabled selected className="text-gray">
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
              className="w-full inline-block p-1.5 mt-7 font-semibold text-white bg-primary rounded-lg hover:bg-primaryDark active:bg-primary"
            >
              Add Exercise
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
