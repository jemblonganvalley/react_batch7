// 1 kita bisa langsung import css ke component
import { useState } from "react";
import "./Navbar.css";

// 2 Kita buat function untuk mereturn components kita
const Navbar = () => {
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
      <Menu show={showMenu} />
    </>
  );
};

//membuat component menu..
const Menu = ({ show }) => {
  return (
    <div
      className="menu"
      style={{
        animationName: show ? "down" : "up",
      }}
    >
      <span>home</span>
      <span>about</span>
      <span>contact</span>
      <span>gallery</span>
    </div>
  );
};

//3 Kita harus export agar bisa di import di komponent lain
export default Navbar;
