import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Loginpage.css"
 

function Loginpage() {
    const navigate= useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    async function handleLogin(e){
        e.preventDefault();
        if(!email || !password){
            alert("Fill the form")
        }else{

        
        var response=await fetch("https://687262f476a5723aacd48352.mockapi.io/Login")
        var data=await response.json()
            var result = data.find(item => item.email === email && item.password === password);
        if(result){
            alert("Login Success")
            navigate("/Welcome")
        }else{
            alert("Invalid Credentials")
        }
    }
}
  return (
    <div>
      <form id='form' onSubmit={handleLogin} action="">
         <label htmlFor=''>Email: </label>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor=''>Password: </label>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button>Login</button>
      </form>
    </div>
  )
}


export default Loginpage