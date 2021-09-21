import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar navbar-change navbar-expand-lg fixed-top navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="soft-nav">Soft</span>Code
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <motion.ul
            className="navbar-nav ml-auto"
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Service" className="nav-link">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
