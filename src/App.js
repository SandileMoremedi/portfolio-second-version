import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Freelancing from "./components/Freelancing/Freelancing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <>
      <Router>
        <Navbar nav={nav} setNav={setNav} handleNav={handleNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/freelancing" element={<Freelancing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
