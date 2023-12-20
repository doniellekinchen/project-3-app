// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';

function Nav(){
  
    return (
        <div className='border border-black'>
            <h1>title</h1>
            <nav className="text-1xl font-bold underline space-x-16">
                <Link to='/'>Home</Link>
                <Link to="/forum">Forum</Link>
                <Link to="/journal">Journal</Link>
                <Link to="/resources">Resources</Link>
            </nav>
        </div>
            
    )
}
    export default Nav;