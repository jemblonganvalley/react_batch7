import "./App.css";
import React, { useState } from "react";
import Home from "./components/pages/home/Home";

//KELAS MALAM
const App = () => {
  const [page, setPage] = useState("about");

  const PageSwitcher = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <h1>INI ABOUT</h1>;
      case "contact":
        return <h1>INI CONTACT</h1>;
      default:
        return <h1>404 not found</h1>;
    }
  };

  return (
    <main className="App" style={{ marginTop: "10vh" }}>
      <div className="menu">
        <button
          onClick={() => {
            setPage("home");
          }}
        >
          home
        </button>
        <button
          onClick={() => {
            setPage("about");
          }}
        >
          about
        </button>
        <button
          onClick={() => {
            setPage("contact");
          }}
        >
          contact
        </button>
        <button
          onClick={() => {
            setPage("404");
          }}
        >
          404
        </button>
      </div>

      <PageSwitcher />
    </main>
  );
};

export default App;
