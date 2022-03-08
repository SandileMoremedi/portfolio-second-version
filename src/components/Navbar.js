import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({ nav, setNav, handleNav }) {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

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
          <motion.div
            transition={transition}
            whileHover={{ scale: 1.2 }}
            className="nav-links home-nav"
            onClick={handleNav}
          >
            <Link to="/">
              <div className="letters">
                <span>HOME</span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            transition={transition}
            whileHover={{ scale: 1.2 }}
            className="nav-links about-nav"
            onClick={handleNav}
          >
            <Link to="/about">
              <div className="letters">
                <span>ABOUT</span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            transition={transition}
            whileHover={{ scale: 1.2 }}
            className="nav-links gallery-nav"
            onClick={handleNav}
          >
            <Link to="/gallery">
              <div className="letters">
                <span>GALLERY</span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            transition={transition}
            whileHover={{ scale: 1.2 }}
            className="nav-links contact-nav"
            onClick={handleNav}
          >
            <Link to="/contact">
              <div className="letters">
                <span>CONTACT</span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            transition={transition}
            whileHover={{ scale: 1.2 }}
            className="nav-links freelancing-nav"
            onClick={handleNav}
          >
            <Link to="/freelancing">
              <div className="letters">
                <span>FREELANCING</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
