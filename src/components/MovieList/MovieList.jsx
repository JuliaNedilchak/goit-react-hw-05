import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movieItem) => {
          return (
            <li key={movieItem.id}>
              <NavLink to={`/movies/${movieItem.id}/`}>
                {movieItem.original_title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
