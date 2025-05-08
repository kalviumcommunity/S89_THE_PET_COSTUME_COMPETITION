import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const[user, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...user, [name]: value});
    };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(user); // Log the user object
        try {
            const response = await axios.post("http://localhost:3000/user/register", user);
            console.log(response.data);
            alert("User registered successfully");
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            alert("Something went wrong");
        }
    }

  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='name' onChange={handleInput} placeholder='Enter Name...'/>
            <input type="text" name="email" onChange={handleInput} placeholder='Enter email...'/>
            <input type="password" name="password" onChange={handleInput} placeholder='Enter Password...'/>
            <input type="submit"/>
        </form>
      
    </div>
  )
}

export default Signup
