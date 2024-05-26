import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import bgLeft from './assets/bg-left.png';
import bgRight from './assets/bg-right.png';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f6f2eb] flex items-center justify-center">
        <div className="absolute inset-y-0 z-0" style={{ backgroundImage: `url(${bgLeft})` }}></div>
        <div className="absolute inset" style={{ backgroundImage: `url(${bgRight})` }}></div>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
