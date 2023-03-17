import {useEffect} from 'react';
import {useTypedSelector} from "../utils/hooks/useTypedSelector";
import {useActions} from "../utils/hooks/useActions";
import Pagination from './Pagination';

const AlbumList: React.FC = () => {
  const { page, error, albums, limit } = useTypedSelector(state => state.album);
  const { fetchAlbums, setAlbumsPage } = useActions();

  useEffect(() => {
      fetchAlbums(page, limit)
  }, [page])

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {albums.map(album =>
        <div key={album.id}>{album.id} - {album.title}</div>
      )}
      <Pagination setPage={setAlbumsPage} page={page} />
    </div>
  );
};

export default AlbumList;
