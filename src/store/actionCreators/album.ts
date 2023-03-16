import {Dispatch} from "redux";
import axios from "axios";
import {AlbumAction, AlbumActionTypes} from "../../types/album";

export const fetchAlbums = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<AlbumAction>) => {
    try {
      dispatch({type: AlbumActionTypes.FETCH_ALBUMS})
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums', {
        params: {_page: page, _limit: limit}
      })
      setTimeout(() => {
        dispatch({type: AlbumActionTypes.FETCH_ALBUMS_SUCCESS, payload: response.data})
      }, 500)
    } catch (e) {
      dispatch({
        type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
        payload: 'Произошла ошибка при загрузке списка дел'
      })
    }
  }
}

export function setAlbumsPage(page: number): AlbumAction {
  return {type: AlbumActionTypes.SET_ALBUMS_PAGE, payload: page}
}
