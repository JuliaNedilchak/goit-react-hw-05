import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiMovieId, apiMovieGenre } from "../../api";

const imgUrl = "https://image.tmdb.org/t/p/w200";
const MovieDetailsPage = () => {
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchMovieId() {
      try {
        const data = await apiMovieId(movie_id);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    async function fetchGenres() {
      try {
        const genreData = await apiMovieGenre();
        console.log("Genre Data:", genreData);
        // Fetch genre list
        setGenres(genreData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieId();
    fetchGenres();
  }, [movie_id]);

  const genreMarkup = () => {
    if (
      movieDetails === null ||
      movieDetails === undefined ||
      genres.length === 0
    )
      return null;
    const filteredgenres = genres.filter((genre) =>
      movieDetails.genre_ids.includes(genre.id)
    );
    console.log(filteredgenres);
    return filteredgenres.map((genre) => {
      return <span key={genre.id}>{genre.name}</span>;
    });
  };

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
          <h3>
            <p>{genreMarkup()}</p>
          </h3>
          <p>ggg</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
