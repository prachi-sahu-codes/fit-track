const InitialState = {
  exercises: [],
  diets: [],
  goals: [],
  totalCaloriesBurned: 0,
  totalCaloriesConsumed: 0,
  totalCaloriesGoals: 0,
  totalCaloriesRemaining: 0,
};

export const activityReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GET_ALL_EXERCISE":
      return {
        ...state,
        exercises: action.payload,
      };
    case "CREATE_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case "DELETE_EXERCISE":
      const updateExercise = state.exercises.filter(
        (exe) => exe?._id !== action.payload
      );
      return {
        ...state,
        exercises: updateExercise,
      };
    case "GET_ALL_DIET":
      return {
        ...state,
        diets: action.payload,
      };
    case "CREATE_DIET":
      return {
        ...state,
        diets: [...state.diets, action.payload],
      };
    case "DELETE_DIET":
      const updateDiets = state.diets.filter(
        (diet) => diet?._id !== action.payload
      );
      return {
        ...state,
        diets: updateDiets,
      };
    case "GET_ALL_GOALS":
      return {
        ...state,
        goals: action.payload,
      };
    case "CREATE_GOAL":
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };
    case "DELETE_GOAL":
      const updateGoal = state.diets.filter(
        (diet) => diet?._id !== action.payload
      );
      return {
        ...state,
        goals: updateGoal,
      };
    case "TOTAL_CALORIES_BURNED":
      const caloriesBurned = state.exercises.reduce(
        (acc, curr) => (acc += curr.caloriesBurned),
        0
      );

      return { ...state, totalCaloriesBurned: caloriesBurned };
    case "TOTAL_CALORIES_CONSUMED":
      const caloriesConsumed = state.diets.reduce(
        (acc, curr) => (acc += curr.calories),
        0
      );
      return { ...state, totalCaloriesConsumed: caloriesConsumed };
    case "TOTAL_GOAL_CALORIES":
      const goalCalories = state.goals.reduce(
        (acc, curr) =>
          curr.status === "In Progress" ? (acc += curr.targetCalories) : acc,
        0
      );
      return { ...state, totalCaloriesGoals: goalCalories };
    case "TOTAL_GOAL_CALORIES_REMAINING":
      const caloriesremaining =
        state.totalCaloriesGoals -
        state.totalCaloriesBurned +
        state.totalCaloriesConsumed;
      if (caloriesremaining > 0) {
        return { ...state, totalCaloriesRemaining: caloriesremaining };
      } else {
        return { ...state, totalCaloriesRemaining: 0 };
      }
    default:
      return state;
  }
};
