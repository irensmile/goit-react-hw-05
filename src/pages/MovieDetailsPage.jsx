import { useParams, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getMovieDetails } from "../api";
import BackLink from "../components/BackLink";
import MovieCard from "../components/MovieCard";
import { Addinfo } from "../components/Addinfo";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loading";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const linkBack = useRef(location.state?.from);

  useEffect(() => {
    async function loadData() {
      try {
        setError("");
        setLoading(true);
        setMovie(await getMovieDetails(movieId));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [movieId]);

  return (
    movie && (
      <>
        <BackLink href={linkBack.current ? linkBack.current : "/"}>
          Go Back
        </BackLink>
        {error && <ErrorMessage message={error} />}
        {loading && <Loader />}
        {movie && <MovieCard movie={movie} />}
        {movie && <Addinfo movieId={movieId} />}
        <Outlet />
      </>
    )
  );
};

export default MovieDetailsPage;
