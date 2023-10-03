import axios from "axios";

import { EXERCISE_URL, DIET_URL, GOAL_URL } from "../apiUrls";

export const getAllExercisesService = (userId) =>
  axios.get(`${EXERCISE_URL}/${userId}`);

export const createExerciseService = (exerciseData) =>
  axios.post(EXERCISE_URL, exerciseData);

export const deleteExerciseService = (exerciseId) =>
  axios.delete(`${EXERCISE_URL}/${exerciseId}`);

// diets

export const getAllDietsService = (userId) =>
  axios.get(`${DIET_URL}/${userId}`);

export const createDietService = (dietData) => axios.post(DIET_URL, dietData);

export const deleteDietService = (dietId) =>
  axios.delete(`${DIET_URL}/${dietId}`);

//goals

export const getAllGoalsService = (userId) =>
  axios.get(`${GOAL_URL}/${userId}`);

export const createGoalService = (goalData) => axios.post(GOAL_URL, goalData);

export const deleteGoalService = (goalId) =>
  axios.delete(`${GOAL_URL}/${goalId}`);
