import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>{
        navigate("/costume")
    }}>
        <button style={{background:"black",color:"white"}}>Join now</button>

    </div>
  )
}

export default Navbar
