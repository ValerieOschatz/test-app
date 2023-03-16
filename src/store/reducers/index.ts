import {combineReducers} from "redux";
import {postReducer} from "./postReducer";
import {albumReducer} from "./albumReducer";

export const rootReducer = combineReducers({
  post: postReducer,
  album: albumReducer
})

export type RootState = ReturnType<typeof rootReducer>
