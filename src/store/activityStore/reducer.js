const InitialState = {
  exercises: [],
  foods: [],
  goals: [],
};

export const activityReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GET_ALL_EXERCISE":
      return {
        ...state,
        exercises: action.payload,
      };

    default:
      return state;
  }
};
