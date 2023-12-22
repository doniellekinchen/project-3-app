/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Forum.css';

// eslint-disable-next-line react/prop-types
function CommentForm({ onAddComment, index, comments, addComment }) {
  const [comment, setComment] = useState('');
 
 console.log(comments)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      const newComment = { body: comment, timeStamp: Date.now() };
      

      if (!comments[index]) {
        comments[index] = []
      }
      comments[index].push(newComment)
     console.log(comments)
     console.log(comments[index])
      localStorage.setItem('comments', JSON.stringify(comments));
      // setComments(comments);
      setComment('');
      onAddComment(comments); 
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    // eslint-disable-next-line no-undef
    setComments(updatedComments);
    onDeleteComment(index); 
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <textarea className='border border-black' value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <br />
      <button className='border border-black' type="submit">Add Comment</button>
    </form>
    </div>
  );
}

CommentForm.PropTypes = {
  onAddComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};

export default CommentForm;