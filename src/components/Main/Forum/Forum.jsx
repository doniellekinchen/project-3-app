import React, { useState } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './Forum.css';

function Forum() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
  
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
  
    const deleteComment = (index) => {
      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);
    };

  return (
    <div className='parent'>
      <h1>Forum goes here</h1>
      <div className='child'>
        <PostForm onAddPost={addPost} />
      </div>
      <div className='child'>
        <PostList posts={posts} onDeletePost={deletePost} />
        <CommentForm onAddComment={addComment}  />
        <CommentList comments={comments} onDeleteComment={deleteComment} />
      </div>
    </div>
  );
}

export default Forum;
