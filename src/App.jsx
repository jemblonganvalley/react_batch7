//component adalah sebuah function
//yang akan me Return Code JSX
// Component pada react pemakaiannya layaknya seperti Element/Tag HTML

//syarat pambuatan component
// 1. Nama File, Variable Harus Huruf Besar
// 2. Bisa berupa file JS atau JSX
// 3. Karena akan di import maka harus ada proses export
// 4. Proses return hanya untuk satu enclosing tag

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/section/hero/Hero";
import About from "./components/section/pages/about/About";
import Contact from "./components/section/pages/contact/Contact";
import Home from "./components/section/pages/home/Home";
import Gallery from "./components/section/pages/gallery/Gallery";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Home />
      <About />
      <Contact />
      <Gallery />
    </div>
  );
};

export default App;
