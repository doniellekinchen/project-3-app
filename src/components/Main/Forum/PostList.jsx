// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function PostList({ posts, onDeletePost }) {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => onDeletePost(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onDeletePost: PropTypes.func.isRequired,
};

export default PostList;