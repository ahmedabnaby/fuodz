import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./Includes/Header"
import Footer from "./Includes/Footer"
import Home from "./Components/Home"


export default function App() {
  return (

    <Router>
      <div className="page-wrapper">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/whatsnew' element={<WhatsNew/>} />
          <Route path='/contact-us' element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

function Products() {
  return <h2>Products</h2>;
}

function AboutUs() {
  return <h2>AboutUs</h2>;
}

function WhatsNew() {
  return <h2>WhatsNew</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}