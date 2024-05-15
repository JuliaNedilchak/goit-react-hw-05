import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>This page is not correct. Please go to the home page</h1>
      <Link to="/">GO HOME</Link>
    </div>
  );
};

export default NotFoundPage;
