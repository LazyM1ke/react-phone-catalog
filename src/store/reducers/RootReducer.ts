import { combineReducers } from "@reduxjs/toolkit";
import UsersSlice from "./UsersSlice";

const rootReducer = combineReducers({
  UsersSlice,
});

export default rootReducer;
