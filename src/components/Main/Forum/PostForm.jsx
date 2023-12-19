// eslint-disable-next-line no-unused-vars
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
        <form className='border border-black' onSubmit={handleSubmit}>
      <label>
        Title:
        <input className='border border-black' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label> <br />
      <label>
        Content: <br/ >
        <textarea className='border border-black' value={body} onChange={(e) => setBody(e.target.value)} />
      </label> <br />
      <button className='border border-black' type="submit">Add Post</button>
    </form>
    </div>
    )
}

PostForm.propTypes = {
    onAddPost: PropTypes.func.isRequired,
  };

export default PostForm