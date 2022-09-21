import React from "react";
import Poster from "../Poster/Poster";
import "./MoviesList.css";

import MoviesListImgs from "./MoviesListImgs";

const Movieslist = ({ movies }) => {
  return (
    <div>
      <MoviesListImgs />
      <Poster movies={movies} />
    </div>
  );
};
export default Movieslist;
