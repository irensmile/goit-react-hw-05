import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getMovieDetails } from "../api";
import BackLink from "../components/BackLink";
import MovieCard from "../components/MovieCard";
import { Addinfo } from "../components/Addinfo";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const linkBack = useRef(location.state);
  //const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      setMovie(await getMovieDetails(movieId));
    }
    loadData();
  }, []);

  if (!movie) return "<></>"; // Refactor
  return (
    <>
      <BackLink href={linkBack.current ? linkBack.current : "/"}>
        Go Back
      </BackLink>
      {movie && <MovieCard movie={movie} />}
      {movie && <Addinfo movieId={movieId} />}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
