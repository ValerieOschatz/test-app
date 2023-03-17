import {
  AlbumAction,
  AlbumActionTypes,
  AlbumState
} from "../../utils/types/album";

const initialState: AlbumState = {
  albums: [],
  page: 1,
  error: null,
  limit: 10,
}

export const albumReducer = (state = initialState, action: AlbumAction): AlbumState => {
  switch (action.type) {
    case AlbumActionTypes.FETCH_ALBUMS:
      return {...state, albums: action.payload};

    case AlbumActionTypes.FETCH_ALBUMS_ERROR:
      return {...state, error: action.payload};

    case AlbumActionTypes.SET_ALBUMS_PAGE:
      return {...state, page: action.payload};
      
    default:
      return state;
  }
}
