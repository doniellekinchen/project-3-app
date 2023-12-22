// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className='container'>
      <div>
        <img src="src/images/Untitled design-2.svg" alt="logo" />
        <div className="nav">
          <nav className='nav-link'>
            <Link to="/home">
              <div className="home">Home</div>
              </Link>
            <Link to="/forum">
              <div className="forum">Forum</div>
            </Link>
            <Link to="/journal"> 
            <div className="journal">Journal</div>
            </Link>
            <Link to="/resources"> 
            <div className="resources">Resources</div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
