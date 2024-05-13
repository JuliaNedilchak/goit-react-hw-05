import React, { useEffect, useState } from "react";
import { apiMovieIdReviews } from "../../api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await apiMovieIdReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
