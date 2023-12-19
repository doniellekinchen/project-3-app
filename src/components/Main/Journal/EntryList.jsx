// eslint-disable-next-line no-unused-vars
import React from 'react';
import Entry from './Entry';
import PropTypes from 'prop-types'

function EntryList({ entries, onDeleteEntry }) {
    return (
        <div>
          <h2 className="text-blue-600">Entries</h2>   
       <div className='border border-black'>
       
        {entries.map((entry, index) => (
          <div key={index}>
            <Entry title={entry.title} body={entry.body} />
            <button onClick={() => onDeleteEntry(index)}>Delete</button>
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
