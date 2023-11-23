import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Learn from "./pages/Learn";
import Int from "./pages/Int";
import Counts from "./pages/Counts";
import Sup from "./pages/Sup";
import Intd from "./pages/Intd";
import Intf from "./pages/Intf";
import Intr from "./pages/Intr";
import Ana from "./pages/Ana";
import Autoint from "./pages/Autoint";
import Bankint from "./pages/Bankint";
import Busint from "./pages/Busint";
import Cloudint from "./pages/Cloudint";
import Energy from "./pages/Energy";
import Forest from "./pages/Forest";
import Gover from "./pages/Gover";
import Health from "./pages/Health";
import Insuint from "./pages/Insuint";
import Life from "./pages/Life";
import Manufacint from "./pages/Manufacint";
import Psint from "./pages/Psint";
import Out from "./pages/Out";
import Retals from "./pages/Retals";
import Socialint from "./pages/Socialint";
import Teleint from "./pages/Teleint";
import Company from "./pages/Company";
import Sas from "./pages/Sas";
// import Slider from "./pages/Slider";
import CountR from "./pages/CountR";
import Login from "./pages/Login/login";
import CourseDetails from "./pages/CourseDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "../src/pages/ContactUs";
import Support from "../src/pages/Support/support";
import "./App.css";
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/training" element={<Learn />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/sas" element={<Sas />} />
          <Route exact path="/CourseDetails" element={<CourseDetails />} />
          <Route exact path="/Count" element={<Int />} />
          <Route exact path="/intd" element={<Intd />} />
          <Route exact path="/intf" element={<Intf />} />
          <Route exact path="/intr" element={<Intr />} />
          <Route exact path="/consulting" element={<Counts />} />
          <Route exact path="/CountR" element={<CountR />} />
          <Route exact path="/Support" element={<Support />} />
          <Route exact path="/analytics" element={<Ana />} />
          <Route exact path="/Bankint" element={<Bankint />} />
          <Route exact path="/Autoint" element={<Autoint />} />
          <Route exact path="/Busint" element={<Busint />} />
          <Route exact path="/Cloudint" element={<Cloudint />} />
          <Route exact path="/Energy" element={<Energy />} />
          <Route exact path="/Forest" element={<Forest />} />
          <Route exact path="/Gover" element={<Gover />} />
          <Route exact path="/Health" element={<Health />} />
          <Route exact path="/Insuint" element={<Insuint />} />
          <Route exact path="/Life" element={<Life />} />
          <Route exact path="/Manufacint" element={<Manufacint />} />
          <Route exact path="/Out" element={<Out />} />
          <Route exact path="/Psint" element={<Psint />} />
          <Route exact path="/Retals" element={<Retals />} />
          <Route exact path="/Socialint" element={<Socialint />} />
          <Route exact path="/Teleint" element={<Teleint />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/vision" element={<Slider/>} /> */}
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
