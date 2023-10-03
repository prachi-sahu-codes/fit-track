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
      console.log(updateExercise);
      return {
        ...state,
        exercises: updateExercise,
      };
    default:
      return state;
  }
};
