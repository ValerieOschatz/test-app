import {useTypedSelector} from "../utils/hooks/useTypedSelector";
import {useActions} from "../utils/hooks/useActions";
import ModelListPage from "./ModelListPage";

const AlbumList: React.FC = () => {
  const { page, error, albums, limit } = useTypedSelector(state => state.album);
  const { fetchAlbums, setAlbumsPage } = useActions();

  return (
    <ModelListPage
      elements={albums}
      error={error}
      page={page}
      limit={limit}
      fetchElements={fetchAlbums}
      setPage={setAlbumsPage}
    />
  );
};

export default AlbumList;
