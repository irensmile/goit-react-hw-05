import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCredits } from "../api";
import CastCard from "./CastCard";
import css from "./MovieCast.module.css";
import Loader from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setError("");
        setLoading(true);
        setCastList(await getMovieCredits(movieId));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [movieId]);

  return (
    <div className={css.container}>
      <h2>Movie Cast</h2>
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      <ul className={css.container}>
        {castList.length > 0 &&
          castList.map((castItem) => (
            <CastCard key={castItem.id} cast={castItem} />
          ))}
      </ul>
    </div>
  );
};
export default MovieCast;

// name character profile_path
