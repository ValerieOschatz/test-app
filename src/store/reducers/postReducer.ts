import {
  PostState,
  PostActionTypes,
  PostAction,
} from '../../utils/types/post';

const initialState: PostState = {
  posts: [],
  error: null,
  page: 1,
  limit: 10,
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return {...state, posts: action.payload};

    case PostActionTypes.FETCH_POSTS_ERROR:
      return {...state, error: action.payload};

    case PostActionTypes.SET_POSTS_PAGE:
      return {...state, page: action.payload};

    default:
      return state;
  }
}
