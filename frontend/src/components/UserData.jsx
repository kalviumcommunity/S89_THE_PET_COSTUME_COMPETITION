import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

const UserData = () => {


    const[users, setUsers] = useState([]);

    async function getUsers(){
        try {
            const data = await axios.get("http://localhost:3000/user");
            console.log(data);
            setUsers(data.data.users);
        } catch (error) {
            console.log(error);
            alert("Something went wrong while fetching data");
        }
    }

    async function getAllCostumeDataRelatedToUser(id){
        try {
            const data = await axios.get(`http://localhost:3000/costume/${id}`);
            console.log(data)
        } catch (error) {
            console.log(error);
            alert("Something went wrong while fetching data");
        }
    }

    useEffect(()=>{
        getUsers()
    },[])

  return (
    <div>
      <select name="" id="" onChange={(event)=>{
        const value = event.target.value;
        getAllCostumeDataRelatedToUser(value);
      }}>
        <option value="">Select</option>
        {
            users.map((user)=>{
                return <option key={user._id} value={user._id}>{user.name}</option>
            })
        }
      </select>
    </div>
  )
}

export default UserData
