import React from 'react'
import {Link } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <header >
      <nav className="navbar navbar-extend-md navbar-dark bg-dark">
        <div className="d-flex container">
          <h3 className="navbar-brand">Employee Management App</h3>
          <ul className="flex-row navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/employee" className="nav-link" aria-current="page">
                Employees
              </Link>
            </li>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <li className="nav-item">
              <Link to="/addemployee" className="nav-link" aria-current="page">
                AddEmployee
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent