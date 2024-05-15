import React, { useEffect, useState } from "react";
import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.list}>
        {movies.map((movieItem) => {
          return (
            <li key={movieItem.id}>
              <Link state={location} to={`/movies/${movieItem.id}/`}>
                {movieItem.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
