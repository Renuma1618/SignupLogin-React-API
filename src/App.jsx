
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './LoginPage/Loginpage';
import Signup from './Signup/Signup';
import Welcomepage from './Welcome/Welcomepage';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/Login' element={<Loginpage/>}></Route>    
      <Route path='/welcome' element={<Welcomepage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
