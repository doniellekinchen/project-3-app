import React, { useState } from 'react'
import PropTypes from 'prop-types' 

function PostForm({onAddPost}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && body) {
            onAddPost({ title, body })
            setTitle('')
            setBody('')
        }
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <button type="submit">Add Post</button>
    </form>
    </div>
    )
}

PostForm.propTypes = {
    onAddPost: PropTypes.func.isRequired,
  };

export default PostForm