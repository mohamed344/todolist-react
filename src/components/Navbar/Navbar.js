import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="logo">
        <h4>Todo List</h4>
      </div>
      <div className="links">
        <button onClick={() => navigate("/")} style={{color: "#fff"}} >Home</button>
        <button onClick={() => navigate("/completed")}>Completed</button>
      </div>
      <div className="buttonsNav">
        <button className="login">Log In</button>
        <button className="signin">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
