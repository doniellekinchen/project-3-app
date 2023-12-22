// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Forum.css'

// eslint-disable-next-line react/prop-types
function PostForm({ onAddPost, comments, setComments }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let cache = localStorage.getItem('posts');
    let allPosts = JSON.parse(cache);
    setPosts(allPosts || []); 
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      const newPost = { title, body, timeStamp: Date.now() };
      const updatedPosts = [...posts, newPost];
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      const newComment=[]
      const updatedComments = [...comments, newComment];
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setPosts(updatedPosts);
      setComments(updatedComments)
      setTitle('');
      setBody('');
      onAddPost(newPost);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input className='border border-black' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content: <br />
          <textarea className='border border-black' value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <br />
        <button className='border border-black' type='submit'>
          Add Post
        </button>
      </form>
    <div className='group'>
    <img src="https://i.ibb.co/52LGkQN/naassom-azevedo-Q-Sei-Tq-Slc-unsplash.jpg" alt="naassom-azevedo-Q-Sei-Tq-Slc-unsplash" border="0" />      <br/>
    </div>
    <div className='descript2'>
      <p>
      Welcome to our vibrant community forum! This space is designed for users like you to share questions, seek advice, and engage in meaningful discussions. Whether you are a seasoned member or a newcomer, feel free to post your inquiries here and tap into the collective wisdom of our community. Let us build a supportive environment where knowledge thrives, and everyone benefits from the power of shared insights. Start a conversation, ask away, and let the collaborative spirit of our forum enhance your experience! 
      </p>
    </div>
    </div>
  );
}

PostForm.propTypes = {
  onAddPost: PropTypes.func.isRequired,
};

export default PostForm;
