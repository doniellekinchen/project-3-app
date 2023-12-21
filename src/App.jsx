// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav.jsx'
import Forum from './components/Main/Forum/Forum'
import Resource from './components/Main/Resource/Resource.jsx'
import Journal from './components/Main/Journal/Journal.jsx'


const App = () => {
 
  return (
       <div className='app-container'>
        <header>
          <Nav />
        </header>
        <br />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/journal" element={ <Journal />} /> 
            <Route path="/resources" element={<Resource /> } />         
            
          </Routes>
        </main>
        </div>

  );
};

export default App;