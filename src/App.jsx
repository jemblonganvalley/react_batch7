import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Gallery from "./components/pages/gallery/Gallery";

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
            <Gallery />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
