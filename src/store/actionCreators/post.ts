import {PostAction, PostActionTypes} from "../../types/post";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchPosts = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({type: PostActionTypes.FETCH_POSTS})
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {_page: page, _limit: limit}
      })
      setTimeout(() => {
        dispatch({type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
      }, 500)
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей'
      })
    }
  }
}

export function setPostsPage(page: number): PostAction {
  return {type: PostActionTypes.SET_POSTS_PAGE, payload: page}
}
