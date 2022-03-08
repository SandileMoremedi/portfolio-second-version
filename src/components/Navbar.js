import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  // const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav>
        <div className="navbar" onClick={() => setNav(!nav)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <h1>Sandile Moremedi</h1>
        <div className={nav ? "cod-nav open" : "cod-nav"}>
          <div className="nav-links home-nav" onClick={() => setNav(!nav)}>
            <Link to="/">
              <div className="letters">
                <span>HOME</span>
              </div>
            </Link>
          </div>
          <div className="nav-links about-nav" onClick={() => setNav(!nav)}>
            <Link to="/about">
              <div className="letters">
                <span>ABOUT</span>
              </div>
            </Link>
          </div>
          <div className="nav-links gallery-nav" onClick={() => setNav(!nav)}>
            <Link to="/gallery">
              <div className="letters">
                <span>GALLERY</span>
              </div>
            </Link>
          </div>
          <div className="nav-links contact-nav" onClick={() => setNav(!nav)}>
            <Link to="/contact">
              <div className="letters">
                <span>CONTACT</span>
              </div>
            </Link>
          </div>
          <div
            className="nav-links freelancing-nav"
            onClick={() => setNav(!nav)}
          >
            <Link to="/freelancing">
              <div className="letters">
                <span>FREELANCING</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
