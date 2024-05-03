import axios from "axios";
export const apiTrendMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJlYTNhYjliMTI0OTA2ODBlMzEwMDlkZWNkZGExNyIsInN1YiI6IjY2MzE1MzQ0OWE4YThhMDEyYWFlMGQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xg7Sb0p5QaewomfUx-jcVH9FFHE-7-jQz9Mbjsif57k",
    },
  };
  const { data } = await axios.request(options);
  return data.results;
};
export const apiMovieSearch = async (query) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      language: "en-US",
      query: `${query}`,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJlYTNhYjliMTI0OTA2ODBlMzEwMDlkZWNkZGExNyIsInN1YiI6IjY2MzE1MzQ0OWE4YThhMDEyYWFlMGQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xg7Sb0p5QaewomfUx-jcVH9FFHE-7-jQz9Mbjsif57k",
    },
  };
  const { data } = await axios.request(options);
  return data.results;
};
export const apiMovieId = async (movie_id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}`,
    params: {
      language: "en-US",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJlYTNhYjliMTI0OTA2ODBlMzEwMDlkZWNkZGExNyIsInN1YiI6IjY2MzE1MzQ0OWE4YThhMDEyYWFlMGQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xg7Sb0p5QaewomfUx-jcVH9FFHE-7-jQz9Mbjsif57k",
    },
  };
  const { data } = await axios.request(options);
  return data;
};
export const apiMovieGenre = async () => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/genre/movie/list`,
    params: {
      language: "en-US",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJlYTNhYjliMTI0OTA2ODBlMzEwMDlkZWNkZGExNyIsInN1YiI6IjY2MzE1MzQ0OWE4YThhMDEyYWFlMGQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xg7Sb0p5QaewomfUx-jcVH9FFHE-7-jQz9Mbjsif57k",
    },
  };
  const { data } = await axios.request(options);
  console.log(data.genres);
  return data.genres;
};
