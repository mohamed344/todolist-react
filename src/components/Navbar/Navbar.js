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
    </div>
  );
};

export default Navbar;
