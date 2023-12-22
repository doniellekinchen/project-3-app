// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className='container'>
      <div className='logo'>
     <img src="https://i.ibb.co/sHHRs7G/Untitled-design-2.png" alt="Untitled-design-2" border="0" />
     </div>
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
  );
}

export default Nav;
