import { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="about">
      <h1>page About</h1>
    </section>
  );
};

export default About;
