import { getMovies } from "../api";
import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  const query = params.get("query") ?? "";

  useEffect(() => {
    async function loadData() {
      const data = await getMovies(query);
      setMovies(data);
    }
    loadData();
  }, [query]);

  const handleSearch = (query) => {
    setParams({ query: query });
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
export default MoviesPage;
