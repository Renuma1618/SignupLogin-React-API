import React from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'

const Welcomepage = () => {

    const navigate = useNavigate();

    const handlelogout = () => {
        alert("You have logged out successfully!");
        navigate('/Login');
    }

  return (
    <div className='welcome-container'>
        <h1>Welcome to the React Application!</h1>
        <p>Thank you for signing up and logging in.</p>
        <button onClick={handlelogout}> LogOut</button>
      
    </div>
  )
}

export default Welcomepage
