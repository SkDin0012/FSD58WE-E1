import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import FullStackDevelopment from './Components/fullstackdevopler';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Career from './Components/Career';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">All</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/full-stack-development">Full Stack Development</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/data-science">Data Science</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cyber-security">Cyber Security</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/career">Career</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container mt-3 text-center">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/full-stack-development" element={<FullStackDevelopment/>} />
          <Route path="/data-science" element={<DataScience/>} />
          <Route path="/cyber-security" element={<CyberSecurity/>} />
          <Route path="/career" element={<Career/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
