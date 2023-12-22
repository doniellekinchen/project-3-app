/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Forum.css';

function CommentList({ comments, index, deleteComment }) {

  return (
    <div className='list'>
      <h4>Comments</h4>
      {comments[index]?.map((comment, index2) => (
        <div key={index2}>
          <p>{comment.body}</p>
           {comment.timeStamp && (
            <p className='text-gray-500 text-sm'>{new Date(comment.timeStamp).toLocaleString()}</p>
            
          )
          }
         <button onClick={() => deleteComment(index, index2)}>Delete Comment</button>
         
        </div>
        ))}
        <br/>
      <hr/>
      <br/>
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;