// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PostForm from './PostForm'
import PostList from './PostList'


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
    <div>
        <h1>Forum goes here</h1>
        <PostForm onAddPost={addPost} />
        <PostList posts={posts} onDeletePost={handleDeletePost} />
    </div>
    )
}

export default Forum

