// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <div className='container'>
      <div>
        <img src="src/images/Untitled design-2.svg" alt="logo" />
        <div className="nav">
          <nav className='nav-link'>
            <Link to="/home" className="nav-item">Home</Link>
            <Link to="/forum" className="nav-item">Forum</Link>
            <Link to="/journal" className="nav-item">Journal</Link>
            <Link to="/resources" className="nav-item">Resources</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
