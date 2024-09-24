import React, { useState } from 'react';
import logobank from './img/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Transection from './Transection';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <nav className="myNav navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to="/"><img src={logobank} alt="Logo" /></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  {isLoggedIn && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/transection">Transection</Link>
                    </li>
                  )}
                  {!isLoggedIn ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                      </li>
                    </>
                  ) : (
                    <li className="nav-item">
                      <Link className="nav-link" onClick={handleLogout} to="">Logout</Link>
                       
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/transection" element={isLoggedIn ? <Transection /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
