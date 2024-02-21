import css from "./BackLink.module.css";
import { Link } from "react-router-dom";

export const BackLink = ({ href, children }) => (
  <Link to={href} className={css.link}>
    {children}
  </Link>
);
export default BackLink;
