//1 Import css
import "./Home.css";
import { useEffect, useState } from "react";

//2 buat component Home
const Home = () => {
  //State merupakan sebuah data yang tersimpan di masing masing compoent React,
  //pada Functional component react, state dibuat dengan cara mengimport sebuah function bawaan react bernama useState
  // state terbuat dari array yang berisi 2 buah variable, variable pertama adalah sebuah variable penyimpan nilai state, dan variable kedua merupakan FUnction untuk merubah nilai variable pertama..

  //Proses sebelum component terlihat
  useEffect(() => {
    //tarik data dari API
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);

  //Buat state penampung nilai data dari API
  const [posts, setPosts] = useState();

  return (
    <section className="home" id="home">
      <h1>Home Page</h1>
      <h3>Selamat datang </h3>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>

        {posts ? (
          <tbody>
            {posts.map((e) => {
              return (
                <tr
                  key={e.id}
                  style={{
                    background: e.id % 2 === 0 ? "lightGrey" : null,
                  }}
                >
                  <td> {e.id} </td>
                  <td> {e.title} </td>
                  <td>{e.body}</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>wait</td>
            </tr>
          </tbody>
        )}
      </table>
    </section>
  );
};

//3 export component Home
export default Home;
