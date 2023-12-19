// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PostForm from './PostForm'
import PostList from './PostList'
import './forum.css'


function Forum() {
    const [posts, setPosts] = useState([]);
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    }
    
    const handleDeletePost = (index) => {
        const updatedPosts = [...posts]
        updatedPosts.splice(index, 1)
        setPosts(updatedPosts)
    }
    return (
    <div className='parent'>
        <h1>Forum goes here</h1>
        <div className='child'>
        <PostForm className='form' onAddPost={addPost} />
        </div>
        <div className='child'>
        <PostList className='list' posts={posts} onDeletePost={handleDeletePost} />
        </div>
    </div>
    )
}

export default Forum

