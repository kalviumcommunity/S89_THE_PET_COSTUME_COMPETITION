import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div style={{display:"flex",justifyContent:"center",padding:"10px"}}>
       <div onClick={()=>{
        navigate("/costume")
    }}>
        <button style={{background:"black",color:"white"}}>Join now</button>

    </div>

    <div onClick={()=>{
        navigate("/list")
    }}>
        <button style={{background:"black",color:"white"}}>Entities</button>

    </div>

    <div onClick={()=>{
        navigate("/addcostume")
    }}>
        <button style={{background:"black",color:"white"}}>Add Costume</button>

    </div>

    </div>
   

    
  )
}

export default Navbar
