// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Breakfast from './components/Breakfast';
import Food from './components/Food';
import Drink from './components/Drink';
import FoodPost from './components/FoodPost';
import BigPost from './components/BigPost';
import BigP from './components/BigP';
import BigPo from './components/BigPo';
import About from './components/About';
import Homee from './components/Homee';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/food" element={<Food />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/bigpost/:id" element={<BigPost />} /> {/* Example route for BigPost */}  
          <Route path="/bigp/:id" element={<BigP />} /> {/* Example route for BigPost */}  
          <Route path="/bigpo/:id" element={<BigPo />} /> {/* Example route for BigPost */}  
          <Route path="/About" element={<About />} /> {/* Example route for About */}  
          <Route path="/" element={<Homee />} /> {/* Example route for About */}  


        </Routes>
      </div>
    </Router>
  );
}

export default App;
