import {combineReducers} from "redux";
import {postReducer} from "./postReducer";
import {todoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
  post: postReducer,
  todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>
