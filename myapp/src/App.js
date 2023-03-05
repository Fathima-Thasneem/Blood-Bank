import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForBlood from './ContactForBlood';
import Home from './Home';
import SignInForm from './SignIn';
import ImageSlider from './ImageSlider';
import Search from './Search';
import SearchByBlood from './SearchByBlood';
import SearchDonor from './SearchDonor';

export default function App(){
  return(<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/contactforblood" element={<ContactForBlood/>} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search-by-blood" element={<SearchByBlood />} />
        <Route path="/search-donor" element={<SearchDonor />} />

    </Routes>
  </BrowserRouter>

  )
}

  
    
    // <div>
    //          {/* <Home></Home> */}
    //          <SignIn></SignIn>
    //          {/* <Dropdown></Dropdown> */}
    //   </div>
   
