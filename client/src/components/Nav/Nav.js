import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark primary-color">
        MiXR
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">Gift</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <span className="sr-only">Gift</span>
            </li>
            <li className="nav-item">
              About
            </li>
            <li className="nav-item">
              Packages
            </li>
            <li className="nav-item">
                Contact Us
              </li>

          </ul>
        </div>
      </nav>
);

export default Nav;
