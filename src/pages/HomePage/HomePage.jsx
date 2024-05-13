import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { apiTrendMovies } from "../../api";

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
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
      {" "}
      <h1>Trending today</h1>
      {movieList.length > 0 && <MovieList movies={movieList} />}
    </div>
  );
};

export default HomePage;
