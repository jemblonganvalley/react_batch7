import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_left">
        <h3 className="footer_left_title">J V A L L E Y</h3>
        <hr className="footer_left_line" />
        <p className="footer_left_body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis illum
          itaque commodi facere distinctio adipisci dolorem corrupti molestias
          dolores, tempora nisi. Modi autem odio cupiditate voluptates rem
          impedit harum soluta?
        </p>
        <div className="footer_left_socmed">
          <span>
            <i className="fab fa-facebook"></i>Facebook
          </span>
          <span>
            <i className="fab fa-twitter"></i>Facebook
          </span>
        </div>
      </div>

      <div className="footer_right">
        <div className="footer_right_sitemap">
          <Link to="/home">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
          <Link to="/gallery">gallery</Link>
        </div>
        <div className="footer_right_subscribe">
          <p className="sub_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            velit tenetur iusto sapiente maiores inventore rerum, suscipit
            adipisci labore consequatur.
          </p>
          <div className="form_group">
            <input
              type="email"
              className="input_email"
              placeholder="masukan email anda"
            />
            <button className="btn">submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
