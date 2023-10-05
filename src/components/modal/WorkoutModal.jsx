import React, { useState } from "react";
import { MdClear } from "react-icons/md";

const exeType = [
  { id: 1, value: "running", text: "Running" },
  { id: 2, value: "cycling", text: "Cycling" },
  { id: 3, value: "swimming", text: "Swimming" },
  { id: 4, value: "walking", text: "Walking" },
  { id: 6, value: "yoga", text: "Yoga" },
  { id: 7, value: "dancing", text: "Dancing" },
  { id: 8, value: "hiking", text: "Hiking" },
  { id: 9, value: "jump_rope", text: "Jump Rope" },
  { id: 10, value: "aerobics", text: "Aerobics" },
  { id: 11, value: "weight_lifting", text: "Weight Lifting" },
  { id: 12, value: "tennis", text: "Tennis" },
  { id: 13, value: "basketball", text: "Basketball" },
  { id: 14, value: "soccer", text: "Soccer" },
  { id: 15, value: "volleyball", text: "Volleyball" },
  { id: 16, value: "table_tennis", text: "Table Tennis" },
  { id: 17, value: "skiing", text: "Skiing" },
  { id: 18, value: "snowboarding", text: "Snowboarding" },
  { id: 19, value: "skating", text: "Skating" },
  { id: 20, value: "climbing", text: "Climbing" },
  { id: 21, value: "pilates", text: "Pilates" },
  { id: 22, value: "crossfit", text: "Crossfit" },
  { id: 23, value: "martial_arts", text: "Martial Arts" },
  { id: 24, value: "gymnastics", text: "Gymnastics" },
  { id: 25, value: "rowing", text: "Rowing" },
  { id: 26, value: "canoeing", text: "Canoeing" },
  { id: 27, value: "kayaking", text: "Kayaking" },
  { id: 28, value: "sailing", text: "Sailing" },
  { id: 29, value: "surfing", text: "Surfing" },
  { id: 30, value: "paddleboarding", text: "Paddleboarding" },
  { id: 31, value: "aerial_sports", text: "Aerial Sports" },
  { id: 32, value: "archery", text: "Archery" },
  { id: 33, value: "fencing", text: "Fencing" },
  { id: 34, value: "golf", text: "Golf" },
  { id: 35, value: "baseball", text: "Baseball" },
  { id: 36, value: "softball", text: "Softball" },
  { id: 37, value: "cricket", text: "Cricket" },
  { id: 38, value: "badminton", text: "Badminton" },
  { id: 39, value: "eSports", text: "eSports" },
  { id: 40, value: "other", text: "Other" }
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
        <div className="relative flex flex-col gap-4 mx-auto bg-bgWhole  shadow-md rounded-lg p-6 ">
          <div
            onClick={() => setShowModal(false)}
            className="absolute -top-3 -right-2"
          >
            <MdClear className="w-8 h-8 p-1 fill-lightGray bg-bgWhole rounded-full" />
          </div>
          <h2 className="text-lg text-white font-semibold mb-3">New Exercise</h2>
          <form onSubmit={(e) => e.preventDefault()} className="text-lightGray">
            <div className="w-full  py-1.5 px-5 font-semibold border-2 rounded-lg border-lightGray m-auto">
              <label htmlFor="name" className="text-blue">Exercise Name:</label>
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
              <label htmlFor="duration" className="text-blue">Duration in minutes:</label>
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
              <label htmlFor="exerciseType" className="text-blue">Exercise Type:</label>
              <select
                className="w-full bg-bgWhole"
                onChange={(e) =>
                  setData((d) => ({ ...d, exerciseType: e.target.value }))
                }
              >
                <option disabled selected>
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
