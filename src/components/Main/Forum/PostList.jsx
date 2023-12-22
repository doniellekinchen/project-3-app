/* eslint-disable react/prop-types */
// PostList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const PostList = ({ posts, onDeletePost, onAddComment, comments, deleteComment }) => {




  return (
    <div className='posts'>
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>
            {post.title} | {post.body} | {new Date(post.timeStamp).toLocaleString()}
          </p>
          <button onClick={() => onDeletePost(index)}>Delete</button>
          <CommentForm onAddComment={onAddComment} index={index} comments={comments} />
          <CommentList comments={comments} deleteComment={deleteComment}  index={index}/>
        </div>
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onDeletePost: PropTypes.func.isRequired,
};

export default PostList;