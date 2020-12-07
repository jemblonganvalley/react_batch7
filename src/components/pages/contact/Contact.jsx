import { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  //lifecycle
  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <section className="contact">
      <h1>page Contact</h1>
    </section>
  );
};

export default Contact;
