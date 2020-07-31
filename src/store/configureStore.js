import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "../redux/reducers";
const logger = createLogger({
  predicate: () => process.env.NODE_ENV === "development",
  collapsed: true,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, logger];

export const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
