// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container d-flex justify-content-center">
      <Link to="/" className="nav-link text-white mx-3">Home</Link>
      <Link to="/names" className="nav-link text-white mx-3">Names</Link>
      <Link to="/lifecycle" className="nav-link text-white mx-3">Lifecycle</Link>
      <Link to="/register" className="nav-link text-white mx-3">Register</Link>
      <Link to="/theme" className="nav-link text-white mx-3">Theme</Link>
    </div>
  </nav>
);

export default Navbar;
