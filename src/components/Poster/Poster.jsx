import React from "react";
import { Link } from "react-router-dom";

const Poster = ({ movies }) => {
  let handleWishlist = (movie) => {
    let wish = localStorage.getItem("wishList");
    wish = JSON.parse(wish);

    let isPresent = wish.some((WishMovie) => {
      return WishMovie.id === movie.id;
    });

    if (isPresent === true) {
      alert("Movie already added to fav");
    } else {
      wish.push(movie);
      wish = JSON.stringify(wish);
      localStorage.setItem("wishList", wish);
    }
  };

  return (
    <div className="movies-list">
      {movies.map((movie) => {
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
              <span role="img">❤️</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Poster;
