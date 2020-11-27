// 1 kita bisa langsung import css ke component
import "./Navbar.css";

// 2 Kita buat function untuk mereturn components kita
const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="brand">Andi Maulana</h3>
      <div className="menu">
        <span>home</span>
        <span>about</span>
        <span>contact</span>
        <span>gallery</span>
      </div>
    </nav>
  );
};

//3 Kita harus export agar bisa di import di komponent lain
export default Navbar;
