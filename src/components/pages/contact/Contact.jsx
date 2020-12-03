import { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="contact">
      <h1>page Contact</h1>
    </section>
  );
};

export default Contact;
