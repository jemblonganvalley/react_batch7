import "./App.css";
import React from "react";
import Container from "./components/container/Container";
import ConCard from "./components/containerCard/ConCard";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="App" style={{ marginTop: "10vh" }}>
        <Container
          title="Title Satu"
          body="ini adalah isi container satu"
          // bgImage="https://picsum.photos/seed/150/600"
          bgColor="yellow"
        >
          <img src="https://picsum.photos/seed/13/200" alt="" />

          <h1>ini dari Parent</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            corporis ipsum corrupti earum libero nostrum quisquam maxime,
            molestias est, explicabo quam, iusto voluptate delectus eius nam
            nisi iste fugit laborum.
          </p>
        </Container>

        <ConCard />
      </main>
    </>
  );
};

export default App;
