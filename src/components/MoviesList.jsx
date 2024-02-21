import css from "./MoviesList.module.css";
import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.trending}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
