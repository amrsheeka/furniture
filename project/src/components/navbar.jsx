import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Modern Store
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
              All Products
            </NavLink>
          </li>
          <li className="nav-item">
          <a href="/" className="nav-link">Sections</a>
          <div class="dropdown-content">
          <NavLink className="aaa" to={"./sereer"}>
             Bed room
            </NavLink>
            <NavLink className="aaa" to={"./salon"}>
            living room
            </NavLink>          
            <NavLink className="aaa" to={"./dolab"}>
            wardrobe
            </NavLink>
         </div>
         </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Shopping Cart
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Log-In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Sign-Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About-Us

            </NavLink>
          </li>
          
          
          
        </ul>
      </div>
      <div>
        <button
          className="btn btn-outline-success my-2 my-sm-0 m-2"
          type="submit"
        >
          Search
        </button>
      </div>
      <input
        className="sm-2 m-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />

      <Link to="/cart">
        <span className="badge badge-primary">
          <i style={{ color: "white" }} className="fas fa-cart-plus"></i>
          {props.productsCount}
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
