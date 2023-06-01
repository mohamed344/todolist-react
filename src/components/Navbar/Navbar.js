import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Header">
        <div className="logo">
            <h4>Todo List</h4>
        </div>
        <div className="auth">
            <button className="login">Login</button>
            <button className="register">Register</button>
        </div>
    </div>
  );
};

export default Navbar;
