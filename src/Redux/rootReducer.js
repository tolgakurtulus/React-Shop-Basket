import { combineReducers } from "redux";

import shoppingReducer from "./reducers/index.js";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
