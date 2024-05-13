import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { apiMovieSearch } from "../../api";

import MovieList from "../../components/MovieList/MovieList";

const FORM_INITIAL_VALUES = {
  movieSearch: "",
};
const MoviesPage = () => {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchMovieSearch() {
      try {
        if (query.length > 0) {
          const data = await apiMovieSearch(query);
          setSearch(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieSearch();
  }, [query]);

  const onSearchQuery = (movieSearch) => {
    setQuery(movieSearch);
  };
  const handleSubmit = (values) => {
    onSearchQuery(values.movieSearch);
  };
  return (
    <div>
      <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="movieSearch" placeholder="search..." />
          <button type="submit">search</button>
        </Form>
      </Formik>
      <div>
        <h2>Search Results:</h2>
        {search.length > 0 && <MovieList movies={search} />}
      </div>
    </div>
  );
};

export default MoviesPage;
