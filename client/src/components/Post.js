import React, { useState, useEffect } from 'react';
import './post.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Post () {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => setPost(response.data));
    axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(response => setComments(response.data));
  }, []);

  return (
    <div className='posts'>
      <div className='post-title'>{post.title}</div>
      <div className='post-userId'>작성자 {post.userId}</div>
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
