import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userRecuder from "./userReducer";

export default combineReducers({
  posts: postsReducer,
  users: userRecuder
});
