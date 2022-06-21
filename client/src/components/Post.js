import React, { useState, useEffect } from 'react';
import './post.css';
import axios from 'axios';

function Post ({ post }) {
  const [comments, setComments] = useState([]);

  // TODO: post.id 로 코멘트 받아오기

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(response => setComments(response.data));
  }, []);

  return (
    <div className='posts'>
      <div className='post-title'>{post.title}</div>
      {/* TODO: 타이틀 css 수정 */}
      <div className='post-userId'>작성자 {post.userId}</div>
      {/* TODO: userId css 수정 */}
      <div className='post-content'>
        {post.body}
        <div className='comment-count'>댓글 {comments.length}개</div>
      </div>
      <div className='comment-view-box'>
        {
            comments.map((comment, id) => {
              return (
                <div className='comment' key={id}>
                  <div className='comment-name'>{comment.name}</div>
                  <div className='comment-body'>{comment.body}</div>
                </div>
              );
            })
        }
      </div>
    </div>
  );
}

export default Post;
