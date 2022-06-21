import './feed.css';
import Post from '../components/Post';

function Feed ({ posts }) {
  // TODO: 페이지네이션 구현
  return (
    <div>
    {
        posts.map((post, id) => {
        return <Post post={post} key={id} />;
        })
    }
    </div>
  );
}

export default Feed;
