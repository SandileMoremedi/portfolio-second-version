import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Freelancing from "./components/Freelancing/Freelancing";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Freelancing />
      <Contact />
    </>
  );
}

export default App;
