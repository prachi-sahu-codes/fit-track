import React from "react";
import { useNavigate } from "react-router";
import dumbbell from "../../assets/dumbbell.png";

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex p-3 pl-8 items-center mb-11 active:opacity-80"
      onClick={() => navigate("/")}
    >
      <div className="text-lg mr-2 font-cursive cursor-pointer bg-primary p-1 rounded-md">
        <img src={dumbbell} className="w-4" />
      </div>
      <span className="cursor-pointer text-xl font-cursive text-white font-semibold ">
        FitTrack
      </span>
    </div>
  );
};
