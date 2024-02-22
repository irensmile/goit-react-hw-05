import { useEffect, useState } from "react";
import { getMovieReviews } from "../api";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import Loader from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    async function loadData() {
      try {
        setError("");
        setLoading(true);
        setReviews(await getMovieReviews(movieId));
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
      <h2>Movie Reviews</h2>
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}

      <ul className={css.container}>
        {reviews.length === 0 ? (
          <p>No reviews yet</p>
        ) : (
          reviews.map((review) => (
            <li key={review.id} className={css["review-item"]}>
              {review.author}
              <div>{review.content}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default MovieReviews;
