import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Header">
      <div className="logo">
        <h4>Todo List</h4>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">Completed</a>
      </div>
      <div className="buttonsNav">
        <button className="login">Log In</button>
        <button className="signin">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
