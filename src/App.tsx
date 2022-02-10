import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';


import YelpNavbar from './components/YelpNavbar';
import Campgrounds from './pages/Campgrounds';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <YelpNavbar current='' />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/campgrounds' element={<Campgrounds />}></Route>
        <Route path='/newcampground' element={<div>newcampgrounds</div>}></Route>
        <Route path='/login' element={<div>login</div>}></Route>
        <Route path='/register' element={<div>register</div>}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
