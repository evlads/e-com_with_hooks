import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
      <Link to="/" className="navbar-brand">
        Logo
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nax-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <button className="btn btn-success">Cart</button>
      </Link>
    </nav>
  )
}

export default Navbar;