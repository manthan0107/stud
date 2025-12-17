import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (

    <nav className="navbar">
      <div className="logo">MyApp</div>
      <div className="nav-links">
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/feedback">Feedback</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>
      </div>
    </nav >

  )
}

export default Header;
