import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import { signUpReducer } from "./signup/reducer";

import thunk from "redux-thunk";

export const rootreducer = combineReducers({
  signup: signUpReducer
});

export const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
);

console.log(store.getState());
