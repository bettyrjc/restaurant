import { combineReducers } from "redux";

import FoodReducer from "./foodReducer";
import CommentsReducer from "./commentsReducer";
import BlogReducer from "./blogReducer";
import UsersReducer from "./usersReducer";
export default combineReducers({
  food: FoodReducer,
  comment: CommentsReducer,
  blog: BlogReducer,
  user: UsersReducer,
});
