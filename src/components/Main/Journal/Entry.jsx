import React from 'react';

// eslint-disable-next-line react/prop-types
function Entry({ title, body }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Entry;
