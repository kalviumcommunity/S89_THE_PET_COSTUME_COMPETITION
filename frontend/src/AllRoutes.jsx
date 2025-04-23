import React from 'react'
import {Routes,Route, Form} from "react-router-dom";
import About from './About';
import Costume from './components/costume';
import Navbar from './Navbar';
import EntityList from './components/EntityList';
import FormPage from './components/FormPage';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/costume' element={<Costume/>}/>
        <Route path='/list' element={<EntityList/>}/>
        <Route path='/addcostume' element={<FormPage/>}/>
    </Routes>
    
  )
}

export default AllRoutes