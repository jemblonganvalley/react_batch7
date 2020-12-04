//1 Import css
import { useEffect, useState } from "react";
import "./Contact.css";

//2 buat component Contact
const Contact = () => {
  //kita gunakan lifecycle useEffect
  useEffect(() => {
    //function di dalam sini akan berjalan sebelum component terload
    // fetch('endpoint', {config})
    fetch("https://a796badd1fb8.ngrok.io/contact", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMsg(data);
      });
  }, []);

  const [msg, setMsg] = useState();

  return (
    <section className="contact" id="contact">
      <h1>Contact Page</h1>

      <div className="message_area">
        {msg ? (
          <>
            {msg.map((e) => {
              return (
                <div key={e.id} className="card">
                  <h3>{e.from}</h3>
                  <p>{e.message}</p>
                </div>
              );
            })}
          </>
        ) : (
          <span>Wait...</span>
        )}
      </div>
    </section>
  );
};

//3 export component Contact
export default Contact;
