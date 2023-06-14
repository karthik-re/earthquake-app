import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/references"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              Bibliography
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
