// import { createStore } from "redux";
// import reducers from "./reducers/index";

// const store = createStore(
//   reducers,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// // second argument is an empty state

// // export default store;

import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
