//1 Import css
import "./Home.css";
import { useState } from "react";

//2 buat component Home
const Home = () => {
  //State merupakan sebuah data yang tersimpan di masing masing compoent React,
  //pada Functional component react, state dibuat dengan cara mengimport sebuah function bawaan react bernama useState
  // state terbuat dari array yang berisi 2 buah variable, variable pertama adalah sebuah variable penyimpan nilai state, dan variable kedua merupakan FUnction untuk merubah nilai variable pertama..

  const [homeData, setHomeData] = useState("Fadliselaz");

  return (
    <section className="home" id="home">
      <h1>Home Page</h1>
      <h3>Selamat datang {homeData} </h3>

      <input
        type="text"
        onChange={(e) => {
          setHomeData(e.target.value);
        }}
      />
    </section>
  );
};

//3 export component Home
export default Home;
