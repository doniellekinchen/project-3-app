// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Forum.css';

function CommentList({ comments }) {
  return (
    <div className='border border-black'>
      <h4>Comments</h4>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.content}</p>
          {/* You can include additional details if available, e.g., timeStamp */}
          {comment.timeStamp && (
            <p className='text-gray-500 text-sm'>{new Date(comment.timeStamp).toLocaleString()}</p>
          )}
        </div>
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
