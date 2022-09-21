import React from "react";
import Poster from "../Poster/Poster";

const DisplayMoviesList = ({ movies }) => {
  return (
    <>
      {/* <div className="movies-list">
        {movies &&
          movies.map(({ movie }) => {
            return (
              <div key={movie.id} className="movie">
                <Link to={`/moviedetails${movie.id}`}>
                  <img src={movie.poster} alt="poster" />
                </Link>
                <button
                  onClick={() => {
                    handleWishlist(movie);
                  }}
                >
                  💓
                </button>
              </div>
            );
          })}
      </div> */}
      <Poster movies={movies} />
    </>
  );
};

export default DisplayMoviesList;
