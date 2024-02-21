import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCredits } from "../api";
import CastCard from "./CastCard";
import css from "./MovieCast.module.css";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    async function loadData() {
      setCastList(await getMovieCredits(movieId));
    }
    loadData();
  }, []);

  return (
    <div className={css.container}>
      <h2>Movie Cast</h2>

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
