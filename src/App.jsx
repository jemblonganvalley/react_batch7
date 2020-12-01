//component adalah sebuah function
//yang akan me Return Code JSX
// Component pada react pemakaiannya layaknya seperti Element/Tag HTML

//syarat pambuatan component
// 1. Nama File, Variable Harus Huruf Besar
// 2. Bisa berupa file JS atau JSX
// 3. Karena akan di import maka harus ada proses export
// 4. Proses return hanya untuk satu enclosing tag

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/section/pages/home/Home";
import About from "./components/section/pages/about/About";
import Contact from "./components/section/pages/contact/Contact";
import Gallery from "./components/section/pages/gallery/Gallery";
import Hero from "./components/section/hero/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* SWITCER PAGE AREA */}
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

          <Route path="/home">
            <Hero />
            <Home />
          </Route>

          <Route path="/">
            <Hero />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
