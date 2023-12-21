// eslint-disable-next-line no-unused-vars
import React from 'react';
// import Entry from './Entry';
import PropTypes from 'prop-types'
import './Journal.css'

function EntryList({ entries, onDeleteEntry }) {
    return (
        <div>
          <h2 className="entriestitle">Entries 📓</h2>
         <p className='descript'>Here is a list of all your previous entries. Treat it like a journal, a notepad, whatever!</p>
        <hr/>
        <br/>
       <div>
       {entries.map((entry, index) => (
  <div key={index}>
        <h2 className='entrytitle'>{entry.title}</h2> <br/> {entry.body} | <br/> {new Date(entry.timeStamp).toLocaleString()} <br/>
        <button className='button' onClick={() => onDeleteEntry(index)}><span>Delete</span></button>
        <br/>
        <br/>
        <hr/>
        <br/>
  </div>
))}
      </div>
      </div>
    );
  }
  

EntryList.propTypes = {
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteEntry : PropTypes.func.isRequired,
  };

export default EntryList;
