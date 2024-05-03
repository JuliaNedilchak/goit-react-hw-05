import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import Navigation from "./components/Navigation/Navigation";
import MoviesPage from "../src/pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../src/pages/MovieDetailsPage/MovieDetailsPage";

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/Movies" element={<MoviesPage />} />
          <Route path="/movies/:movie_id" element={<MovieDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
