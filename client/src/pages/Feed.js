import { useState, useEffect } from 'react';
import './feed.css';
import Post from '../components/Post';
import Pagination from '../components/Pagination';

function Feed ({ posts }) {
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div>
    {
        posts.slice(offset, offset + limit).map((post, id) => {
          return <Post post={post} key={id} />;
        })
    }
        <footer>
            <Pagination
            total={posts.length}
            limit={limit}
            page={page}
            setPage={setPage}
            />
        </footer>
    </div>
  );
}

export default Feed;
