import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/dumbbell.svg";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative bottom-0 text-center text-blue py-11 px-4 bg-bgBox border-t-2 border-iconPurple border-opacity-30">
      <p className="text-lg">
        Made with <span>&lt;/&gt;</span> by Prachi Sahu
      </p>
      <div className="flex gap-4 justify-center text-xs m-4">
      <Link
      className="hover:underline underline-offset-2 transition ease-in-out delay-75 duration-300 hover:scale-105"
          to="https://www.linkedin.com/in/prachi-sahu-96b228200/"
          target="_blank"
        >
          Frontend Repo
        </Link>
        <Link
         className="hover:underline underline-offset-2 transition ease-in-out delay-75 duration-300 hover:scale-105"
          to="https://www.linkedin.com/in/prachi-sahu-96b228200/"
          target="_blank"
        >
          Backend Repo
        </Link>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Link
          to="https://github.com/prachi-sahu-codes/fit-track-backend"
          target="_blank"
        >
          <BsGithub className="w-6 h-6 transition ease-in-out delay-75 duration-300 hover:scale-125" />
        </Link>

        <Link to="https://twitter.com/_prachi_sahu" target="_blank">
          <BsTwitter className="w-6 h-6 transition ease-in-out delay-75 duration-300 hover:scale-125" />
        </Link>

        <Link
          to="https://www.linkedin.com/in/prachi-sahu-96b228200/"
          target="_blank"
        >
          <BsLinkedin className="w-6 h-6 transition ease-in-out delay-75 duration-300 hover:scale-125" />
        </Link>
      </div>
      
      <div className="flex justify-center items-center gap-2 text-sm mt-5">
        <span>© 2023</span>
        <img className="w-5 h-5 bg-primary p-1 rounded-md" src={logo} />
        <p className="text-lightGray ">FitTrack.</p>
      </div>
    </div>
  );
};

export default Footer;
