// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Forum.css';

// eslint-disable-next-line react/prop-types
function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      const newComment = { body: comment, timeStamp: Date.now() };
      const updatedComments = [...comments, newComment];
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setComments(updatedComments);
      setComment('');
      onAddComment(newComment); // Pass the new comment to the parent component
    }
  };

  // const handleDeleteComment = (index) => {
  //   const updatedComments = [...comments];
  //   updatedComments.splice(index, 1);
  //   localStorage.setItem('comments', JSON.stringify(updatedComments));
  //   setComments(updatedComments);
  //   onDeleteComment(index); // Pass the index to the parent component for deletion
  // };

  return (
    <div>
      <form className='border border-black' onSubmit={handleSubmit}>
      <label>
        Comment:
        <textarea className='border border-black' value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <br />
      <button className='border border-black' type="submit">Add Comment</button>
    </form>

      <div>
        {comments.map((c, index) => (
          <div key={index}>
            <p>{c.body}</p>
            <button onClick={() => handleDeleteComment(index)}>Delete Comment</button>
          </div>
        ))}
      </div>
    </div>
  );
}

CommentForm.PropTypes = {
  onAddComment: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};

export default CommentForm;
