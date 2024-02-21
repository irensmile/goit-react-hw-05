import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api";
import css from "./HomePage.module.css";
import MoviesList from "../components/MoviesList";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getTrendingMovies();
      setMovies(data);
    }
    loadData();
  }, []);

  return (
    <>
      <h2 className={css.trending}>Trending Today</h2>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
