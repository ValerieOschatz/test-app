import {
  AlbumAction,
  AlbumActionTypes,
  AlbumState
} from "../../types/album";

const initialState: AlbumState = {
  albums: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false
}

export const albumReducer = (state = initialState, action: AlbumAction): AlbumState => {
  switch (action.type) {
    case AlbumActionTypes.FETCH_ALBUMS:
      return {...state, loading: true};

    case AlbumActionTypes.FETCH_ALBUMS_SUCCESS:
      return {...state, loading: false, albums: action.payload};

    case AlbumActionTypes.FETCH_ALBUMS_ERROR:
      return {...state, loading: false, error: action.payload};

    case AlbumActionTypes.SET_ALBUMS_PAGE:
      return {...state, page: action.payload};
      
    default:
      return state;
  }
}
