import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { apiMovieId } from "../../api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const imgUrl = "https://image.tmdb.org/t/p/w200";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieId() {
      try {
        const data = await apiMovieId(movieId);

        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieId();
  }, [movieId]);

  return (
    <div>
      {movieDetails !== null && (
        <div>
          <img
            src={`${imgUrl}/${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
          ></img>
          <h2>{movieDetails.title}</h2>
          <p>user score: {Math.ceil(movieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres:</h3>
          <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
