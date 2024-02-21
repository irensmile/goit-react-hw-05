import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api";
import { useParams, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const data = await getTrendingMovies();
      setMovies(data);
    }
    loadData();
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <p
              onClick={() => {
                navigate(`/movie/${movie.id}`, { replace: true });
              }}
              key={movie.id}
            >
              {movie.title}
            </p>
          ))}
        </ul>
      )}
    </>
  );
};

export default HomePage;
