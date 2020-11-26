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
      <NavLink to="/about" className="span" activeClassName="span_active">
        about
      </NavLink>
      <NavLink to="/contact" className="span" activeClassName="span_active">
        contact
      </NavLink>
      <NavLink to="/gallery" className="span" activeClassName="span_active">
        gallery
      </NavLink>

      <NavLink to="/home" className="span" activeClassName="span_active">
        home
      </NavLink>
    </div>
  );
};

export default Menu;
