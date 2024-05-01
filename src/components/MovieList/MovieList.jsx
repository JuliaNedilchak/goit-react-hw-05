import React, { useEffect, useState } from "react";
import { apiTrendMovies } from "../../api";

const MovieList = () => {
  const [movieList, setMovieList] = useState(null);
  useEffect(() => {
    async function fetchTrandMovies() {
      try {
        const data = await apiTrendMovies();
        setMovieList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrandMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movieList !== null &&
          Array.isArray(movieList) &&
          movieList.map((movieItem) => {
            return <li key={movieItem.id}>{movieItem.original_title}</li>;
          })}
      </ul>
    </div>
  );
};

export default MovieList;
