import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}  />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
