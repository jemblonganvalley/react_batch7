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
      <span>home</span>
      <span>about</span>
      <span>contact</span>
      <span>gallery</span>
    </div>
  );
};

export default Menu;
