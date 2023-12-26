import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import Users from './components/Users';
import Error404 from './components/Error404.js';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact="true"  className={(navData) => (navData.isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
    className={(navData) => (navData.isActive ? 'active' : '')}
  >
    menu 1
  </NavLink>
            </li>
            <li>
              <NavLink to="/about"  className={(navData) => (navData.isActive ? 'active' : '')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users"  className={(navData) => (navData.isActive ? 'active' : '')}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
