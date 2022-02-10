import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import YelpNavbar from './components/YelpNavbar';
import Footer from './components/Footer';

//Pages
import Campgrounds from './pages/Campgrounds';
import Home from './pages/Home';
import Login from './pages/Login'

import "./app.css"

function App() {
  return (
    <BrowserRouter>
      <YelpNavbar current='' />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/campgrounds' element={<Campgrounds />}></Route>
        <Route path='/newcampground' element={<div>newcampgrounds</div>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<div>register</div>}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
