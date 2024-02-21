import css from "./MovieCard.module.css";
import { buildPicturePath } from "../api";

export const MovieCard = ({ movie }) => (
  <div className={css.card}>
    <img
      src={buildPicturePath(movie.backdrop_path)}
      alt={movie.title}
      width="500"
    />
    <div className={css.details}>
      <h2>{movie.title}</h2>
      <h3>User Score: {movie.vote_average}</h3>
      <div>
        <h3>Movie overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  </div>
);

export default MovieCard;
