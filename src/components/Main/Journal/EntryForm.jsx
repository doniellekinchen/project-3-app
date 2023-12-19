import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function EntryForm({ onAddEntry }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEntry({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label> <br/>
      <label>
        write what is on your mind...<br />
        <textarea className="border border-black" value={body} onChange={(e) => setBody(e.target.value)} />
      </label> <br />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default EntryForm;
