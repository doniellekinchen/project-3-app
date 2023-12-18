import React from 'react'
import { useState, useEffect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
  } from "@material-tailwind/react";

  export function Nav() {
    const [nav, setNav] = useState(false);
   
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Pages
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Account
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Blocks
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Docs
          </a>
        </Typography>
      </ul>
    );
  
    return (
        <div>
            <nav className="text-1xl font-bold underline">
                <Link to="/forum">Forum</Link>
                <Link to="/journal">Journal</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/resources">Resources</Link>
            </nav>
        </div>
            
    )
}
    export default Nav;