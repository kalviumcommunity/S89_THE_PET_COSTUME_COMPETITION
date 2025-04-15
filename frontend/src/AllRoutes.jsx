import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About';
import Costume from './components/costume';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='costume' element={<Costume/>}/>
    </Routes>
    
  )
}

export default AllRoutes