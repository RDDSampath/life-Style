import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from './Components/Nav';
import Home from './Components/home'
import Kids from "./Components/kids_page";
import Tech from './Components/tech_page';
import Resturant from './Components/resturant_review';
import Recipe from './Components/food_recipe_page';
import Footer from "./Components/footer";
//import Navbar from './Components/sidenav';

function App() {
  //<Route path="/" element={<Layout />}>
  return (
    <BrowserRouter> <center>
    <Nav/>
    
      <Routes>
          <Route index element={<Home />} />
          <Route path="/kids" element={<Kids />}/>
          <Route path="/tech" element={<Tech />}/>
          <Route path="/resturant" element={<Resturant/>}/>
          <Route path="/res" element={<Recipe/>}/>
      </Routes> <Footer/></center>
    </BrowserRouter>
  );
}

export default App;
