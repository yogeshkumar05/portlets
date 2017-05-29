import { combineReducers } from "redux"
import streamReducer from "./streamingReducer";
import treeReducer from "./treeReducer";

export default combineReducers({
  streamReducer,
  treeReducer
})
