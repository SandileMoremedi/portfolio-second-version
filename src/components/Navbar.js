import { useState } from "react";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <>
      <nav>
        <div className="navbar" onClick={handleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <h1>Sandile Moremedi</h1>
        <div className={nav ? "cod-nav open" : "cod-nav"}>
          <div className="nav-links home-nav" onClick={handleNav}>
            <a href="#about">
              <div className="letters">
                <span>HOME</span>
              </div>
            </a>
          </div>
          <div className="nav-links about-nav" onClick={handleNav}>
            <a href="#about">
              <div className="letters">
                <span>ABOUT</span>
              </div>
            </a>
          </div>
          <div className="nav-links gallery-nav" onClick={handleNav}>
            <a href="#gallery">
              <div className="letters">
                <span>GALLERY</span>
              </div>
            </a>
          </div>
          <div className="nav-links contact-nav" onClick={handleNav}>
            <a href="#contact">
              <div className="letters">
                <span>CONTACT</span>
              </div>
            </a>
          </div>
          <div className="nav-links freelancing-nav" onClick={handleNav}>
            <a href="#freelancing">
              <div className="letters">
                <span>FREELANCING</span>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
