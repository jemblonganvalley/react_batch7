// 1 kita bisa langsung import css ke component
import { useState } from "react";
import "./Navbar.css";

// 2 Kita buat function untuk mereturn components kita
const Navbar = () => {
  //membua state unutk manipulasi component
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h3 className="brand">Andi Maulana</h3>
        <i
          className="material-icons menu_icon"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          menu
        </i>

        {/* CONDITIONAL RENDERING dengan TERNARY OPERATION*/}

        {/* {showMenu === true ? <Menu show={showMenu} /> : null} */}
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
      <a
        href="#home"
        onClick={() => {
          pullUp();
        }}
      >
        home
      </a>
      <a
        href="#about"
        onClick={() => {
          pullUp();
        }}
      >
        about
      </a>
      <a
        href="#contact"
        onClick={() => {
          pullUp();
        }}
      >
        contact
      </a>
      <a
        href="#gallery"
        onClick={() => {
          pullUp();
        }}
      >
        gallery
      </a>
    </div>
  );
};

//3 Kita harus export agar bisa di import di komponent lain
export default Navbar;
