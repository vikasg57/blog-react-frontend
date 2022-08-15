import {
  configureStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";


import thunk from "redux-thunk";

export const rootreducer = combineReducers({
  signup: signupreducer,
  login: loginnreducer,
});

export const store = configureStore(
  rootreducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
);

console.log(store.getState());
