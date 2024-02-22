import css from "./Addinfo.module.css";
import { Link } from "react-router-dom";

export const Addinfo = ({ movieId }) => (
  <div className={css.addinfo}>
    <h3>Additional Information</h3>
    <ul>
      <li>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </li>
    </ul>
  </div>
);
