import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import Bookreducer from "./reducer/Bookreducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Bookreducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
export default store;
