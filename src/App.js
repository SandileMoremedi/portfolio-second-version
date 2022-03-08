import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Freelancing from "./components/Freelancing/Freelancing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freelancing" element={<Freelancing />} />
      </Routes>
    </div>
  );
}

export default App;
