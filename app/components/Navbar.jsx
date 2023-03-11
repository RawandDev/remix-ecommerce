import { Link, useLoaderData } from "@remix-run/react";
import React from "react";

function Navbar({ carts }) {
  return (
    <div
      style={{
        zIndex: 100,
        position: "relative",
      }}
    >
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/products/add">Add Product</Link>
          <Link to="/cart">Cart</Link>
        </ul>
      </nav>
      <div>{carts?.length}</div>
    </div>
  );
}

export default Navbar;
