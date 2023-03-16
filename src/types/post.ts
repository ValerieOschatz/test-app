interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  SET_POSTS_PAGE = 'SET_POSTS_PAGE',
}

interface FetchPostsAction {
  type: PostActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: Post[];
}

interface FetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

interface SetPostsPage {
  type: PostActionTypes.SET_POSTS_PAGE;
  payload: number;
}

export type PostAction = 
  FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | SetPostsPage;
