import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Costume from './components/costume';
import Navbar from './Navbar';
import EntityList from './components/EntityList';
import FormPage from './components/FormPage';
import Signup from './components/Signup';
import Login from './components/Login';
import UserData from './components/UserData';

const AllRoutes = () => {
  const [selectedEntity, setSelectedEntity] = useState(null);

  const refreshEntities = () => {
    setSelectedEntity(null); // Reset after update
  };

  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/costume' element={<Costume/>}/>
        <Route path='/list' element={<EntityList setSelectedEntity={setSelectedEntity} />} />
        <Route path='/addcostume' element={<FormPage selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} refreshEntities={refreshEntities} />} />
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userData' element={<UserData/>}/>
    </Routes>
  );
}

export default AllRoutes;