import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { buildPicturePath, getMovieDetails } from "../api";
import css from "./MovieDetailsPage.module.css";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadData() {
      setMovie(await getMovieDetails(movieId));
    }
    loadData();
  }, []);
  if (!movie) return "<></>";
  return (
    <div className={css.card}>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img
        src={buildPicturePath(movie.backdrop_path)}
        alt={movie.title}
        width="500"
      />
    </div>
  );
};
//backdrop_path
//overview
//genres ([id, name])
//release date
export default MovieDetailsPage;
