import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import Logo from './components/logo/Logo';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

export default function main() {
  return (
    <BrowserRouter>
       <div className="app" >
          <Logo />
          <Nav />
          <Routes />
          <Footer />
      </div>
    </BrowserRouter>
   
  );
}
