// import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={transition}
            className="nav-links home-nav"
            onClick={() => setNav(!nav)}
          >
            <Link to="/">
              <motion.div
                className="letters"
                transition={transition}
                exit={{ opacity: 0 }}
              >
                <span>HOME</span>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            className="nav-links about-nav"
            whileHover={{ scale: 1.1 }}
            transition={transition}
            onClick={() => setNav(!nav)}
          >
            <Link to="/about">
              <motion.div
                className="letters"
                transition={transition}
                exit={{ opacity: 0 }}
              >
                <span>ABOUT</span>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            className="nav-links gallery-nav"
            whileHover={{ scale: 1.1 }}
            transition={transition}
            onClick={() => setNav(!nav)}
          >
            <Link to="/gallery">
              <motion.div
                className="letters"
                transition={transition}
                exit={{ opacity: 0 }}
              >
                <span>GALLERY</span>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            className="nav-links contact-nav"
            whileHover={{ scale: 1.1 }}
            transition={transition}
            onClick={() => setNav(!nav)}
          >
            <Link to="/contact">
              <motion.div
                className="letters"
                transition={transition}
                exit={{ opacity: 0 }}
              >
                <span>CONTACT</span>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            className="nav-links freelancing-nav"
            whileHover={{ scale: 1.1 }}
            transition={transition}
            onClick={() => setNav(!nav)}
          >
            <Link to="/freelancing">
              <motion.div
                className="letters"
                transition={transition}
                exit={{ opacity: 0 }}
              >
                <span>FREELANCING</span>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            className="nav-links blogs-nav"
            whileHover={{ scale: 1.1 }}
            transition={transition}
            onClick={() => setNav(!nav)}
          >
            <Link to="/blogs">
              <motion.div
                className="letters"
                exit={{ opacity: 0 }}
                transition={transition}
              >
                <span>BLOGS</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
