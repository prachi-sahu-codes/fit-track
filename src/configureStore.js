import { createStore, combineReducers } from "redux";
import { authReducer } from "./store/authStore/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  //   activity: activityReducer,
});

const store = createStore(rootReducer);
export default store;
