const localStorageToken = JSON.parse(localStorage.getItem("authItems"));

const InitialState = {
  token: localStorageToken?.token,
  loggedUser: localStorageToken?.user,
  loading: false,
};

export const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        token: action.payload.token,
        loggedUser: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        loggedUser: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        token: action.payload.token,
        loggedUser: action.payload.user,
      };
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
