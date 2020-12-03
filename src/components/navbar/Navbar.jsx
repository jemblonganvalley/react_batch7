// 1 kita bisa langsung import css ke component
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// 2 Kita buat function untuk mereturn components kita
const Navbar = () => {
  //membua state unutk manipulasi component
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h3 className="brand">jvalley</h3>
        <i
          className="material-icons menu_icon"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          menu
        </i>

        <div className="group_icon">
          <NavLink to="/home">
            <i className="material-icons">home</i>
          </NavLink>

          <NavLink to="/about">
            <i className="material-icons">settings</i>
          </NavLink>

          <NavLink to="/contact">
            <i className="material-icons">phone</i>
          </NavLink>

          <NavLink to="/gallery">
            <i className="material-icons">image</i>
          </NavLink>
        </div>
      </nav>

      <Menu
        show={showMenu}
        pullUp={() => {
          setShowMenu(false);
        }}
      />
    </>
  );
};

//membuat component menu..
const Menu = ({ show, pullUp }) => {
  return (
    <div
      className="menu"
      style={{
        animationName: show ? "down" : "up",
      }}
    >
      <NavLink
        to="/home"
        onClick={() => {
          pullUp();
        }}
      >
        home
      </NavLink>

      <NavLink
        to="/about"
        onClick={() => {
          pullUp();
        }}
      >
        about
      </NavLink>

      <NavLink
        to="/contact"
        onClick={() => {
          pullUp();
        }}
      >
        contact
      </NavLink>

      <NavLink
        to="/gallery"
        onClick={() => {
          pullUp();
        }}
      >
        gallery
      </NavLink>
    </div>
  );
};

//3 Kita harus export agar bisa di import di komponent lain
export default Navbar;
