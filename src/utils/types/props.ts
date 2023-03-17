import { Post } from './post';
import { Album } from './album';

export interface PaginationProps {
  setPage: (p: number) => void,
  page: number,
}

export interface ModelListPageProps extends PaginationProps {
  elements: Post[] | Album[],
  error: string | null,
  limit: number,
  fetchElements: (page: number, limit: number) => void
}
