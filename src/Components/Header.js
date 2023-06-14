import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <nav>
          <ul className={style.list}>
            <li>
              <NavLink to="/">
                <img src={logo} alt="Logo" className={style.logo} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/earthquakes"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
              >
                Earthquakes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/weather"
                className={({ isActive }) =>
                  isActive ? style.active : undefined
                }
              >
                Weather
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
