import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api";
import css from "./HomePage.module.css";
import MoviesList from "../components/MoviesList";
import Loader from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setError(false);
        setLoading(true);
        setMovies(await getTrendingMovies());
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <h2 className={css.trending}>Trending Today</h2>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
