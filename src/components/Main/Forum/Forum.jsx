import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import './Forum.css';

function Forum() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
  
    

    useEffect(() => {
      let cache = localStorage.getItem('posts');
      let allPosts = JSON.parse(cache);
      setPosts(allPosts || []); 
    }, []);

    const addPost = (newPost) => {
      setPosts([...posts, newPost]);
    };
  
    const deletePost = (index) => {
      const updatedPosts = [...posts];
      updatedPosts.splice(index, 1);
      setPosts(updatedPosts);
    };
  
    const addComment = (newComment) => {
      setComments([...comments, newComment]);
    };
  
    const deleteComment = (index1, index2) => {
      const updatedComments = [...comments];
      updatedComments[index1].splice(index2, 1);
      setComments(updatedComments);
    };

  return (
    <div className='parent'>
      <div className='title2'>
      <h1>Community 🫂</h1>
      </div>
      <br/>
      <div className='child'>
      <PostForm onAddPost={addPost} comments={comments} setComments={setComments} />
      </div>
      <div className='child'>
        <PostList posts={posts} onDeletePost={deletePost} onAddComment={addComment} comments={comments} deleteComment={deleteComment}/>
      </div>
    </div>
  );
}

export default Forum;