import { getMovies } from "../api";
import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [params, setParams] = useSearchParams();

  const query = params.get("query") ?? "";

  useEffect(() => {
    async function loadData() {
      try {
        setError("");
        setLoading(true);
        setMovies(await getMovies(query));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [query]);

  const handleSearch = (query) => {
    setParams({ query: query });
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
export default MoviesPage;
