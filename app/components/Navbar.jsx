import { Link, NavLink } from "@remix-run/react";
import React from "react";

function Navbar({ carts }) {
  return (
    <div
      style={{
        zIndex: 100,
        position: "relative",
      }}
    >
      <nav className="nav-wrapper">
        <ul className="nav-links">
          <li className="nav-links__li">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-links__li">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li className="nav-links__li">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
        </ul>
        <div>{carts?.length}</div>
      </nav>
    </div>
  );
}

export default Navbar;
