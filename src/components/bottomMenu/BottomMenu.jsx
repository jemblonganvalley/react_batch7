import { NavLink } from "react-router-dom";
import "./BottomMenu.css";

const BottomMenu = () => {
  return (
    <nav className="bottom_menu">
      <NavLink to="/home" activeClassName="bottom_menu_active">
        <i className="material-icons">home</i>
      </NavLink>

      <NavLink to="/about" activeClassName="bottom_menu_active">
        <i className="material-icons">help</i>
      </NavLink>

      <NavLink to="/contact" activeClassName="bottom_menu_active">
        <i className="material-icons">contact_page</i>
      </NavLink>

      <NavLink to="/gallery" activeClassName="bottom_menu_active">
        <i className="material-icons">insert_photo</i>
      </NavLink>
    </nav>
  );
};

export default BottomMenu;
