import {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const PostList: React.FC = () => {
  const { posts, error, loading, page, limit } = useTypedSelector(state => state.post);
  const {fetchPosts, setPostsPage} = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
      fetchPosts(page, limit)
  }, [page])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {posts.map(post =>
        <div key={post.id}>{post.id} - {post.title}</div>
      )}
      <div style={{display: "flex"}}>
        {pages.map(p =>
          <div
            onClick={() => setPostsPage(p)}
            style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
          >
            {p}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
