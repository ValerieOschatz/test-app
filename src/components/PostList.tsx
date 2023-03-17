import {useTypedSelector} from "../utils/hooks/useTypedSelector";
import {useActions} from "../utils/hooks/useActions";
import ModelListPage from './ModelListPage';

const PostList: React.FC = () => {
  const { posts, error, page, limit } = useTypedSelector(state => state.post);
  const { fetchPosts, setPostsPage } = useActions();

  return (
    <ModelListPage
      elements={posts}
      error={error}
      page={page}
      limit={limit}
      fetchElements={fetchPosts}
      setPage={setPostsPage}
      title={'Посты'}
    />
  );
};

export default PostList;
