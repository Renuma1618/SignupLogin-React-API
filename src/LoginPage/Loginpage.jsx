import React, {  useState } from 'react'
import './Loginpage.css'
import { useNavigate } from 'react-router-dom'


const Loginpage = () => {
  const navigate = useNavigate();

    const[email, setEmail] =useState("")
    const [password, setpassword]  = useState("") 

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("https://687262f476a5723aacd48352.mockapi.io/Login", {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();
    const user = users.find(
  (u) =>
    u.name.trim().toLowerCase() === name.trim().toLowerCase() &&
    u.password === password
);


    if (user) {
      alert("Login successful!");
      setEmail("");
      setpassword("");
      navigate('/welcome');
    } else {
      alert("Login failed. Incorrect name or password.");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong. Please try again later.");
  }
};
    
    
  return (
  <div className='login-container'>
    <form className='login-form' onSubmit={handleLogin}>
      <h1>Login</h1>

      <label htmlFor="email">Name</label>
      <input
        type="Email"
        name="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  </div>
);
}

export default Loginpage
