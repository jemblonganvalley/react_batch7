//1 Import css
import { useEffect, useState } from "react";
import "./Contact.css";

//2 buat component Contact
const Contact = () => {
  const dt = new Date();
  const [msg, setMsg] = useState();
  const [inputMsg, setInputMsg] = useState({
    from: "",
    message: "",
  });
  const [refresh, setRefresh] = useState(false);
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
  }, [refresh]);

  const kirimPesan = () => {
    fetch("https://a796badd1fb8.ngrok.io/contact", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: inputMsg.from,
        message: inputMsg.message,
        date: `${dt.getDate()}/${dt.getMonth()}/${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}`,
      }),
    });
    setRefresh(!refresh);
    setInputMsg({
      ...inputMsg,
      message: "",
    });
  };

  const handleDelete = (args) => {
    fetch(`https://a796badd1fb8.ngrok.io/contact/${args}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRefresh(!refresh);
  };

  return (
    <section className="contact" id="contact">
      <h1>Contact Page</h1>

      <div className="message_area">
        {msg ? (
          <>
            {msg.map((e) => {
              return (
                <div key={e.id} className="card">
                  <i
                    className="material-icons close_icon"
                    id={e.id}
                    onClick={(e) => {
                      handleDelete(e.target.id);
                    }}
                  >
                    close
                  </i>
                  <h3>{e.from}</h3>
                  <p>{e.message}</p>
                  <small className="dateTime">{e.date}</small>
                </div>
              );
            })}
          </>
        ) : (
          <span>Wait...</span>
        )}
      </div>

      <div className="input_area">
        <input
          type="text"
          id="from"
          name="from"
          autoComplete={false}
          onChange={(e) => {
            setInputMsg({
              ...inputMsg,
              from: e.target.value,
            });
          }}
          placeholder="masukan username"
          value={inputMsg.from}
        />

        <textarea
          type="text"
          id="message"
          className="textarea_message"
          name="message"
          onChange={(e) => {
            setInputMsg({
              ...inputMsg,
              message: e.target.value,
            });
          }}
          placeholder="masukan pesan"
          value={inputMsg.message}
        />

        <button
          className="btn_msg"
          onClick={() => {
            kirimPesan();
          }}
          href="/contact"
        >
          kirim
        </button>
      </div>
    </section>
  );
};

//3 export component Contact
export default Contact;
