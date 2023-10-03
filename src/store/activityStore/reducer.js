const InitialState = {
  exercises: [],
  diets: [],
  goals: [],
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
      console.log(updateDiets);
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
      console.log(updateGoal);
      return {
        ...state,
        goals: updateGoal,
      };
    default:
      return state;
  }
};
