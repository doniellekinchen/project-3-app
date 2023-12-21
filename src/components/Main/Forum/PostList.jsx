// PostList.jsx
import React from 'react';
import PropTypes from 'prop-types';


const PostList = ({ posts, onDeletePost }) => {


  return (
    <div className='border border-black'>
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>
            {post.title} | {post.body} | {new Date(post.timeStamp).toLocaleString()}
          </p>
          <button onClick={() => onDeletePost(index)}>Delete</button>
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