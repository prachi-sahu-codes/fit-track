import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiGithub } from "react-icons/fi";

const NavBar = ({ title }) => {
  function formatDate(date) {
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  }
  const today = formatDate(new Date());
  const user = useSelector((state) => state?.auth?.loggedUser);

  return (
    <div className=" flex justify-between p-2 bg-bgWhole">
      <div>
        <h1 className="text-2xl text-white pt-2">{title}</h1>
        <p className="text-mediumGray text-xs">{today}</p>
      </div>
      <div className="flex gap-4">
        <Link
          className="w-9 h-9 rounded-full p-1 pt-2 border-2 border-primary cursor-pointer"
          to="https://github.com/prachi-sahu-codes?tab=repositories"
          target="_blank"
        >
          <FiGithub className="w-6 h-6 stroke-iconPurple" title="Github" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
