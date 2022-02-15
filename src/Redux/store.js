import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

// const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(rootReducer);
window.store = store

export default store;
