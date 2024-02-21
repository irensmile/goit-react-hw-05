import { useEffect, useState } from "react";
import { getMovieReviews } from "../api";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

export const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadData() {
      setReviews(await getMovieReviews(movieId));
    }
    loadData();
  }, []);

  return (
    <div className={css.container}>
      <h2>Movie Reviews</h2>
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
