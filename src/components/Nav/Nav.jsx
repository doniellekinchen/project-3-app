// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';

function Nav(){
  
    return (
        <div>
            <nav className="text-1xl font-bold underline">
                <Link to='/'>Home</Link>
                <Link to="/forum">Forum</Link>
                <Link to="/journal">Journal</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/resources">Resources</Link>
            </nav>
        </div>
            
    )
}
    export default Nav;