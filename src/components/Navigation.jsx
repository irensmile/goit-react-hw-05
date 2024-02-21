import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => (
  <nav className={css.nav}>
    <NavLink to="/" className={buildLinkClass}>
      Home
    </NavLink>
    <NavLink to="/movies" className={buildLinkClass}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
