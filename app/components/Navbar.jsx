import { Link, NavLink } from "@remix-run/react";
import React from "react";
import { motion, animate } from "framer-motion";

function Navbar({ carts }) {
  const activeClassName = ({ isActive }) => (isActive ? "active" : undefined);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const node = ref.current;
    animate(node, {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.5,
      },
    });
    
  }, [carts.length]);

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
            <NavLink to="/" className={activeClassName}>
              Home
            </NavLink>
          </li>
          <li className="nav-links__li">
            <NavLink className={activeClassName} to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-links__li">
            <NavLink className={activeClassName} to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
        <motion.div ref={ref}>{carts?.length}</motion.div>
      </nav>
    </div>
  );
}

export default Navbar;
