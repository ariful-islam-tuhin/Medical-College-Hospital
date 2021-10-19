import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "white",
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <span className="text-white">Arif Medical College & Hospital</span>
      <img
        className="navbar-brand"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeE9hPq55PdfBBgsQUwTlRkZRuggH2Vu2OZg&usqp=CAU"
        }
        alt=""
      />

      <div className="navbar-nav  ml-auto">
        <NavLink className="NavLink" to="/home" activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink className="NavLink" to="/services" activeStyle={activeStyle}>
          Services
        </NavLink>
        <NavLink className="NavLink" to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
        <NavLink className="NavLink" to="/contact" activeStyle={activeStyle}>
          Contact
        </NavLink>
        <Link className="NavLink">Log in</Link>
        <Link className="NavLink">Register</Link>
      </div>
    </nav>
  );
};

export default Header;
