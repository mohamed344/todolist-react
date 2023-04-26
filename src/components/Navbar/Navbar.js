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
        <a href="/">Trash</a>
      </div>
      <div className="buttons">
        <button>Login</button>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
