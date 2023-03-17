export interface Album {
  id: number;
  title: string;
}

export interface AlbumState {
  albums: Album[];
  error: null | string;
  page: number;
  limit: number;
}

export enum AlbumActionTypes {
  FETCH_ALBUMS= 'FETCH_ALBUMS',
  FETCH_ALBUMS_ERROR= 'FETCH_ALBUMS_ERROR',
  SET_ALBUMS_PAGE = 'SET_ALBUMS_PAGE'
}

interface FetchAlbumsAction {
  type: AlbumActionTypes.FETCH_ALBUMS;
  payload: Album[];
}

interface FetchAlbumsErrorAction {
  type: AlbumActionTypes.FETCH_ALBUMS_ERROR
  payload: string;
}

interface SetAlbumsPage {
  type: AlbumActionTypes.SET_ALBUMS_PAGE
  payload: number;
}

export type AlbumAction =
  FetchAlbumsAction
  | FetchAlbumsErrorAction
  | SetAlbumsPage;
