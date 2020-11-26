import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
//BROWSERROUTER
// adalah sebuah wrapper dimana semua kegiatan perpindahan ROute dilakukan di dalamnya..

//Switch
//adalah sebuah wrapper dimana Route Berada, dan tempat view perpindahan pagenya..

//Route
//adalah Path URL dari website kita, dan menjadi tempat componennt page berada

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="App" style={{ marginTop: "10vh" }}>
        <Switch>
          <Route path="/gallery">
            <h1>Ini Page gallery</h1>
          </Route>

          <Route path="/contact">
            <h1>Ini Page contact</h1>
          </Route>

          <Route path="/about">
            <h1>Ini Page about</h1>
          </Route>

          <Route path="/">
            <h1>Ini Page Home</h1>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
