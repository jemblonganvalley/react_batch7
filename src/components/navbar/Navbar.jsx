import { useState } from "react";
import Menu from "../menu/Menu";
import Modal from "../modal/Modal";
import "./Navbar.css";

const Navbar = () => {
  //STATE SHOW
  const [show, setShow] = useState(false);
  const [tabMenu, setTabMenu] = useState(false);

  return (
    <>
      {/* TERNARY OPERATION */}
      {show ? <Modal /> : null}

      <Menu show={tabMenu} />

      <nav className="navbar">
        <h3 className="brand">JVALLEY</h3>
        <span
          className="material-icons menu"
          onClick={() => {
            setShow(!show);
          }}
        >
          menu
        </span>

        <span
          className="material-icons arrow"
          onClick={() => {
            setTabMenu(!tabMenu);
          }}
        >
          keyboard_arrow_down
        </span>
      </nav>
    </>
  );
};

export default Navbar;
