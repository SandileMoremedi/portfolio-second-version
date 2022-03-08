import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Freelancing from "./components/Freelancing/Freelancing";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <>
      <Navbar nav={nav} setNav={setNav} handleNav={handleNav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freelancing" element={<Freelancing />} />
      </Routes>
    </>
  );
}

export default App;
