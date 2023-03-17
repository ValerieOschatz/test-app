import {PostAction, PostActionTypes} from "../../utils/types/post";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchPosts = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {_page: page, _limit: limit}
      })
      dispatch({type: PostActionTypes.FETCH_POSTS, payload: response.data})
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
