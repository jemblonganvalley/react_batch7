import { useEffect } from "react";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="home">
      <h1>page home</h1>
    </section>
  );
};

export default Home;
