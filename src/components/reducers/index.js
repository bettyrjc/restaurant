import { combineReducers } from "redux";

import FoodReducer from "./foodReducer";

export default combineReducers({
  food: FoodReducer,
});
