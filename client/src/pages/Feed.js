import { useState, useEffect } from 'react';
import './feed.css';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

function Feed ({ posts }) {
  const navigate = useNavigate();
  
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const viewPostHandler = (e) => {
    const id = Number(e.target.parentElement.id);
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === id) {
        navigate(`/posts/${id}`);
      }
    }
  }

  return (
    <div>
          <div className='post-list'>
        {
          posts.length === 0
            ? <div>게시물이 없습니다.</div>
            : <table>
              <tbody>
                {
                posts.slice(offset, offset + limit).map((post) => {
                  return (
                    <tr className='community-content' id={post.id} key={post.id} onClick={viewPostHandler}>
                      <td className='community-content-title'>{post.title}</td>
                      <td className='community-content-userId'>작성자 {post.userId}</td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
        }
      </div>
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
