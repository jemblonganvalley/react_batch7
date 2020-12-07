import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  //state penampung data dari API..
  const [users, setUsers] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section className="home">
      <h1>page home</h1>

      {/* CONDITIONAL RENDERING */}
      {users ? (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>

          <tbody>
            {users.map((e) => {
              return (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <small>loading please wait . . . </small>
      )}
    </section>
  );
};

export default Home;
