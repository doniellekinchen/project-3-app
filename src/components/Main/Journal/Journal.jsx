import React, { useState } from 'react';
import EntryList from './EntryList';
import EntryForm from './EntryForm';

function Journal() {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries]
    updatedEntries.splice(index, 1)
        setEntries(updatedEntries)
  }

  return (
    <div>
      <h1>My Journal</h1>
      <EntryForm onAddEntry={addEntry} />
      <EntryList entries={entries} onDeleteEntry={deleteEntry} />
      
    </div>
  );
}

export default Journal;
