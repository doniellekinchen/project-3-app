import React, { useState, useEffect } from 'react';
import EntryList from './EntryList';
import EntryForm from './EntryForm';
import './Journal.css';

function Journal() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    let cache = localStorage.getItem('entries');
    let allEntries = JSON.parse(cache);
    setEntries(allEntries || []);
  }, []);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
    localStorage.setItem('entries', JSON.stringify([...entries, newEntry]));
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
  };

  return (
    <div className='entryform-container'>
      <div>
    <h1 className='header'>My Journal</h1>
      </div>
      <br/>
    <div className='here'> 
       <p className='add'>add your entry here...🔻</p> <br/>
    </div> 
    <div className='entryform'>
      
    <EntryForm onAddEntry={addEntry} />
  </div>
  <div className='entrylist'>
    <EntryList entries={entries} onDeleteEntry={deleteEntry} />
  </div>
</div>
  );
}

export default Journal;
