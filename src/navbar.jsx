import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../src/images/img1.png"
class Navbar extends Component {
  state = {}
  render() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">

      <img src={logo} className='bg-transparent' width='50' alt="" />

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tv">TV</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>);
  }
}

export default Navbar;