import React from 'react';
import './NavigationBar.css';
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
         <div>
        <nav>
          <input type="checkbox" id="nav" className="hidden" />
          <label htmlFor="nav" className="nav-btn">
            <i />
            <i />
            <i />
          </label>
          <div className="logo">
            <Link to="/"><span className="soft">Soft</span>Code</Link>
          </div>
          <div className="nav-wrapper">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Skills">Skills</Link></li>
                        <li><Link to="/Service">Service</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>

    )
}

export default NavigationBar
