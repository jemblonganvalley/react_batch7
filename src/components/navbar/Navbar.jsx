import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h3 className="brand">JVALLEY</h3>
        <div className="menu">
          <span>home</span>
          <span>about</span>
          <span>contact</span>
          <span>gallery</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
