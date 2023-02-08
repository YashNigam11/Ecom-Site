import React ,{useContext}from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartItems } from "./App";

export default function Navbar() {
  const {items,setItems} = useContext(cartItems)
  const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            YN-Collection
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link active m-2"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active m-2" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active m-2" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active m-2" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="button">
              <NavLink className="btn btn-outline-dark" to="/login">
                <i className="fa fa-sign-in me-1"></i>
                Login
              </NavLink>
              <NavLink className="btn btn-outline-dark ms-2" to="/register">
                <i className="fa fa-user-plus me-1"></i>
                Register
              </NavLink>
              <NavLink className="btn btn-outline-dark ms-2" to="/cart">
                <i className="fa fa-shopping-cart me-1 "></i>
                Cart({items.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
