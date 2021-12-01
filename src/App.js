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
      <Route exact path="/math-magician/" element={<Homepage />} />
      <Route path="/math-magician/calculator" element={<Calculator />} />
      <Route path="/math-magician/quotes" element={<Quotes />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
