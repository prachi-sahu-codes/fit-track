import { signupService, loginService } from "../../api/services/authServices";
import { toast } from "react-toastify";

export const signUpUser =
  (input, setUserInfo, navigate) => async (dispatch) => {
    try {
      dispatch({
        type: "LOADING",
        payload: true,
      });
      const res = await signupService(input);
      if (res.status === 201) {
        const { token, user } = res.data;
        dispatch({
          type: "SIGNUP",
          payload: { token, user },
        });
        dispatch({
          type: "LOADING",
          payload: false,
        });
        setUserInfo(() => ({
          username: "",
          email: "",
          password: "",
          phoneNumber: "",
        }));
        navigate("/login");
        toast.success(
          "Sign up successful! Now please login to access your account."
        );
      }
    } catch (e) {
      dispatch({
        type: "LOADING",
        payload: false,
      });
      console.log("Error:", e);
      toast.error(
        e?.response?.data?.error
          ? e?.response?.data?.error
          : "Something is wrong. Please try again!"
      );
    }
  };

export const loginUser = (input, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await loginService(input);
    if (res.status === 201) {
      const { token, user } = res.data;
      localStorage.setItem("authItems", JSON.stringify({ token, user }));
      dispatch({
        type: "LOGIN",
        payload: { token, user },
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      navigate("/dashboard");
      toast.success(`Greetings, ${user.username} ! Enjoy your time with us!`);
    }
  } catch (e) {
    dispatch({
      type: "LOADING",
      payload: false,
    });
    console.log("Error:", e);
    toast.error(
      e?.response?.data?.error
        ? e?.response?.data?.error
        : "Something is wrong. Please try again!"
    );
  }
};

export const logoutHandler = (navigate) => async (dispatch) => {
  localStorage.removeItem("authItems");

  dispatch({
    type: "LOGOUT",
    payload: { token: null, user: null },
  });

  navigate("./");
  toast.success("Logout successful. We hope to see you again soon!");
};
