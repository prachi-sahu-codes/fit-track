import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { Logo } from "../../components/logo/Logo";
import { toast } from "react-toastify";
import { loginUser } from "../../store/authStore/action";

const Login = () => {
  const [passVisible, setPassVisible] = useState("password");
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    if (userInfo.email && userInfo.password) {
      dispatch(loginUser(userInfo, navigate));
     
    } else {
      toast.error("Please fill in all fields with valid details.!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-hero-pattern bg-cover bg-center">
      <div className="w-full">
        <Logo />
        <div className="px-5 sm360:px-10 md970:px-24 pt-5 h-max-content text-center">
          <p className="pt-1 pb-4 text-white text-2xl md700:text-4xl font-semibold">
            Welcome to Community Dashboard
          </p>
          <p className="pt-1 pb-4 md700:pb-6 text-xs md700:text-sm text-white font-semibold">
            Track your activities and food calories to meet your fitness goals
          </p>

          <form className="" onSubmit={(e) => e.preventDefault()}>
          <div className="w-full md700:w-1/2 py-1.5 px-5 mt-5 md700:text-lg font-semibold border-2 rounded-lg border-lightGray m-auto">
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                value={userInfo.email}
                className="w-full outline-0 text-white bg-transparent"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, email: e.target.value }))
                }
                required
              />
            </div>

            <div className="relative w-full md700:w-1/2 py-1.5 px-5 mt-5 md700:text-lg font-semibold border-2 rounded-lg border-lightGray m-auto">
              <input
                type={passVisible}
                placeholder="Password"
                id="pwd"
                name="pwd"
                value={userInfo.password}
                className="w-full outline-0 text-white bg-transparent"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, password: e.target.value }))
                }
                required
              />
              <div className="absolute right-5 top-3">
                {passVisible === "password" ? (
                  <BsEyeSlashFill
                    onClick={() => setPassVisible(() => "text")}
                    className="fill-white"
                  />
                ) : (
                  <BsEyeFill
                    onClick={() => setPassVisible(() => "password")}
                    className="fill-white"
                  />
                )}
              </div>
            </div>

            <button
              onClick={() => loginHandler()}
              className="w-full md700:w-1/2 inline-block p-1.5 mt-6 md700:mt-10 md700:text-lg font-semibold text-white bg-primary rounded-full hover:bg-primaryDark active:bg-primary"
            >
              Login
            </button>

            <div className="flex justify-center m-3 mb-10 gap-2">
              <span className="text-mediumGray font-semibold">Don't have an account? </span>
              <Link
                to="/"
                className="font-semibold hover:opacity-90 active:opacity-80 underline text-white"
              >
                SignUp!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
