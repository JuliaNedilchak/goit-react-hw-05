import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.active]: isActive })
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.active]: isActive })
          }
          to="/Movies"
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
