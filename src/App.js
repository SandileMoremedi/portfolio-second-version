import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Freelancing from "./components/Freelancing/Freelancing";
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
      <Home />
      <About />
      <Gallery />
      <Freelancing />
      <Contact />
    </>
  );
}

export default App;
