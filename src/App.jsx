// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { Routes, Route, } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Navi from './components/Nav/Nav.jsx'
import Forum from './components/Main/Forum/Forum'
import Resource from './components/Main/Resource/Resource.jsx'
import Journal from './components/Main/Journal/Journal.jsx'


function App() {

  return (
    <>
    <header>
    <Navi />
    </header>
    <main>
        <Routes > 
          <Route path='/' element= { <Home/> } />
          <Route path='/login' element= { <Login /> } />
          <Route path='/forum' element={ <Forum />} />
          <Route path='/journal' element={ <Journal /> } />
          <Route path='/resources' element={ <Resource />} />
        </Routes>
      </main>
    </>
  )
}

export default App