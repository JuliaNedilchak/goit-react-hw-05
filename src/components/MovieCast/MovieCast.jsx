import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiMovieIdCast } from "../../api";
import css from "./MovieCast.module.css";
const imgUrl = "https://image.tmdb.org/t/p/w200";
const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await apiMovieIdCast(movieId);
        console.log(data.cast);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <ul className={css.castList}>
        {casts.length > 0 &&
          casts.map((cast) => {
            return (
              <li className={css.castItem} key={cast.id}>
                <img
                  src={`${imgUrl}/${cast.profile_path}`}
                  alt={cast.original_name}
                ></img>
                <div>
                  <p>{cast.name}</p>
                  <p>{cast.character}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
