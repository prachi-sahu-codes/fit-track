const localStorageToken = JSON.parse(localStorage.getItem("authItems"));

const InitialState = {
  token: localStorageToken?.token,
  loggedUser: localStorageToken?.user,
};

export const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
