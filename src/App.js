import React, { useState } from "react";
import axios from 'axios'
const App =()=>{
    const [data,setData]=useState({
        Name:'',
        Password : "",
        Email:'',
        Address:'',
    })
    const MyEvent=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handdleConsole = (e) => {
        e.preventDefault();  
      axios.post('https://aapoon-66769-default-rtdb.firebaseio.com/aapoon.json',
      data).then(()=>alert("submitted successfully"))

    }
    return(
        <>
        <form align='center'>
           <label>Name</label> <br/>        
        <input type="text" name="Name" placeholder="enter your details" onChange={MyEvent}></input><br/> 
        <label>Password</label>  <br/>               
        <input type="password" name="Password" placeholder="enter your Password" onChange={MyEvent}></input><br/> 
        <label>Email</label> <br/>                
        <input type="Email" name="Email" placeholder="enter your email" onChange={MyEvent}></input><br/>
        <label>Address</label><br/>         
        <input type='' name="Address" placeholder="enter your address" onChange={MyEvent}></input><br/>

           <button  value="Login" onClick={(e) => handdleConsole(e)}>Login</button>

        </form>
        </> 
        
    )
    
    }
export default App ;
