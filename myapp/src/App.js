import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dropdown from './ContactForBlood';
import Home from './Home';
import SignInForm from './SignIn';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


export default function App(){
  return(<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/contactforblood" element={<Dropdown/>} />
        <Route path="/imageslider" element={<ImageSlider />} />
    </Routes>
  </BrowserRouter>

  )
}

  
    
    // <div>
    //          {/* <Home></Home> */}
    //          <SignIn></SignIn>
    //          {/* <Dropdown></Dropdown> */}
    //   </div>
   
