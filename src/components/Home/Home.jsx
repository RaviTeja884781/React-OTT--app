import Movieslist from "../MoviesList/MoviesList";
import useFetch from "../useFetch";
import React from "react";
import "./Home.css";
import { useEffect } from "react";
import server_error from "../../images/errors/server_error.jpg";

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem("wishList") === null) {
      localStorage.setItem("wishList", "[]");
    }
  }, []);

  let { data: movies, pending, error } = useFetch(
    "http://localhost:4000/movies"
  );

  return (
    <div className="home">
      {error && (
        <div className="home_errors">
          <img src={server_error} alt="fetch error..." />
          <h1>{error}</h1>
        </div>
      )}

      {pending && (
        <div class="showbox">
          <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
              <circle
                className="path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      )}
      {movies && <Movieslist movies={movies} />}
    </div>
  );
};
export default Home;
