//1 Import css
import { useEffect, useState } from "react";
import "./About.css";

//2 buat component Home
const About = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const [users, setUsers] = useState();

  return (
    <section className="about" id="about">
      <h1>About Page</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>

        <tbody>
          {users ? (
            <>
              {users.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                  </tr>
                );
              })}
            </>
          ) : (
            <tr>
              <td>wait</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

//3 export component Home
export default About;
