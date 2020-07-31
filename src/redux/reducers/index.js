import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import List from "./fetchList";

const appReducer = combineReducers({
  routing,
  List,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
