import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./store/authStore/reducer";
import { activityReducer } from "./store/activityStore/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  activity: activityReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
