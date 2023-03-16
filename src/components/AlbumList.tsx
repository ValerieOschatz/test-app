import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const AlbumList: React.FC = () => {
  const {page, error, loading, albums, limit} = useTypedSelector(state => state.album);
  const {fetchAlbums, setAlbumsPage} = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
      fetchAlbums(page, limit)
  }, [page])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {albums.map(album =>
        <div key={album.id}>{album.id} - {album.title}</div>
      )}
      <div style={{display: "flex"}}>
        {pages.map(p =>
          <div
            onClick={() => setAlbumsPage(p)}
            style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
          >
            {p}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumList;
