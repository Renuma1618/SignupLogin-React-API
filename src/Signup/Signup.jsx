
import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const navigate = useNavigate();

    const [name, setname]= useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

     const handleSignup = async(e)=>{
      e.preventDefault();
     const response= await fetch("https://687262f476a5723aacd48352.mockapi.io/Login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password
      })
    });

    if (response.ok) {
      alert("Signup successful!");
      setname(""); setEmail(""); setPhone(""); setPassword("");
      navigate('/Login')
    } else {
      alert("Signup failed.");
    }
  };

  return (
     <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <label htmlFor="Username">Username</label>
        <input type="text" name="Username" value={name} onChange={(e)=>setname(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
         <button type="submit">Register</button>
         </form>

    </div>
    
  )
}


export default Signup
