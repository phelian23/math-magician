import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Quotes from './components/quotes';
import Footer from './components/footer';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
