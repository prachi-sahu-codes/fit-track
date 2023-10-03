import {
  getAllExercisesService,
  createExerciseService,
  deleteExerciseService,
  getAllDietsService,
  createDietService,
  deleteDietService,
  getAllGoalsService,
  createGoalService,
  deleteGoalService,
} from "../../api/services/activityServices";
import { toast } from "react-toastify";

export const getAllExercises = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await getAllExercisesService(userId);
    if (res.status === 201) {
      const { data } = res.data;
      dispatch({
        type: "GET_ALL_EXERCISE",
        payload: data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
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

export const createExercises = (input, setData) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await createExerciseService(input);
    if (res.status === 201) {
      const { data } = res.data;
      dispatch({
        type: "CREATE_EXERCISE",
        payload: data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      setData(() => ({ name: "", duration: 0, exerciseType: "" }));
      toast.success("Exercise added successfully!");
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

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await deleteExerciseService(exerciseId);
    if (res.status === 204) {
      dispatch({
        type: "DELETE_EXERCISE",
        payload: exerciseId,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      toast.success("Exercise deleted successfully!");
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

export const getAllDiets = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await getAllDietsService(userId);
    if (res.status === 201) {
      const { data } = res.data;
      dispatch({
        type: "GET_ALL_DIET",
        payload: data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
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

export const createDiet = (input, setData) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await createDietService(input);
    if (res.status === 201) {
      const { data } = res.data;
      dispatch({
        type: "CREATE_DIET",
        payload: data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      setData(() => ({
        name: "",
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
      }));
      toast.success("Diet added successfully!");
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

export const deleteDiet = (dietId) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await deleteDietService(dietId);
    if (res.status === 204) {
      dispatch({
        type: "DELETE_DIET",
        payload: dietId,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      toast.success("Diet deleted successfully!");
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

export const getAllGoals = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await getAllGoalsService(userId);
    if (res.status === 201) {
      const { data } = res.data;
      dispatch({
        type: "GET_ALL_GOALS",
        payload: data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
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

export const createGoal = (input, setData) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await createGoalService(input);
    if (res.status === 201) {
      const { data } = res.data;
      dispatch({
        type: "CREATE_GOAL",
        payload: data,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      setData(() => ({
        name: "",
        description: "",
        targetDate: "",
        targetCalorie: 0,
        status: "",
      }));
      toast.success("Goal added successfully!");
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

export const deleteGoal = (goalId) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await deleteGoalService(goalId);
    if (res.status === 204) {
      dispatch({
        type: "DELETE_GOAL",
        payload: goalId,
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
      toast.success("Goal deleted successfully!");
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

export const calcTotalCaloriesBurned = (userId) => async (dispatch) => {
  await dispatch(getAllExercises(userId));
  dispatch({ type: "TOTAL_CALORIES_BURNED" });
};

export const calcTotalCaloriesConsumed = (userId) => async (dispatch) => {
  await dispatch(getAllDiets(userId));
  dispatch({ type: "TOTAL_CALORIES_CONSUMED" });
};

export const calcGoalCalories = (userId) => async (dispatch) => {
  await dispatch(getAllGoals(userId));
  dispatch({ type: "TOTAL_GOAL_CALORIES" });
  dispatch({ type: "TOTAL_GOAL_CALORIES_REMAINING" });
};
