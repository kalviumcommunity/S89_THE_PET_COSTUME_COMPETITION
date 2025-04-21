import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About';
import Costume from './components/costume';
import Navbar from './Navbar';
import EntityList from './components/EntityList';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/costume' element={<Costume/>}/>
        <Route path='/list' element={<EntityList/>}/>
    </Routes>
    
  )
}

export default AllRoutes