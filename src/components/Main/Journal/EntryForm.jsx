import React, { useState, useEffect } from 'react';
import './Journal.css'

// eslint-disable-next-line react/prop-types
function EntryForm({ onAddEntry }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    let cache = localStorage.getItem('entries');
    let allEntries = JSON.parse(cache);
    setEntries(allEntries || []);
  }, []);
  
  // ...
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedEntries;
    if (title && body) {
      const newEntry = { title, body, timeStamp: Date.now() };
      updatedEntries = [...entries, newEntry];
      localStorage.setItem('entries', JSON.stringify(updatedEntries));
      setEntries(updatedEntries || []);
      setTitle('');
      setBody('');
      onAddEntry(newEntry);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label> 
      <br/>
      <br/>
      <br/>
      <label>
        write what is on your mind...<br />
        <textarea className="border border-black" value={body} onChange={(e) => setBody(e.target.value)} />
      </label> <br />
      <button className='button2' type="submit"><span>Add Entry</span></button>
     
    </form>
  );
}

export default EntryForm;
