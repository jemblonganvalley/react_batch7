import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = ({ show }) => {
  return (
    <div
      className="tab_menu"
      style={{
        // display: show ? "flex" : "none",
        transform: show ? "translateY(0)" : "translateY(-55vh)",
      }}
    >
      <NavLink to="/" className="span">
        home
      </NavLink>
      <NavLink to="/about" className="span">
        about
      </NavLink>
      <NavLink to="/contact" className="span">
        contact
      </NavLink>
      <NavLink to="/gallery" className="span">
        gallery
      </NavLink>
    </div>
  );
};

export default Menu;
