import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import Navigation from "./components/Navigation/Navigation";
import MoviesPage from "../src/pages/MoviesPage/MoviesPage";

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
        </Routes>
      </main>
    </div>
  );
};

export default App;
