import {useEffect} from 'react';
import {useTypedSelector} from "../utils/hooks/useTypedSelector";
import {useActions} from "../utils/hooks/useActions";
import Pagination from './Pagination';

const PostList: React.FC = () => {
  const { posts, error, page, limit } = useTypedSelector(state => state.post);
  const { fetchPosts, setPostsPage } = useActions();

  useEffect(() => {
      fetchPosts(page, limit)
  }, [page])

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {posts.map(post =>
        <div key={post.id}>{post.id} - {post.title}</div>
      )}
      <Pagination setPage={setPostsPage} page={page} />
    </div>
  );
};

export default PostList;
