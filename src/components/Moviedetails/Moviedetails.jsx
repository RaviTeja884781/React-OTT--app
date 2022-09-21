import { useParams, useNavigate, Link } from "react-router-dom";
import useFetch from "../useFetch";
import React from "react";
import "./Moviedetails.css";
import SideBar from "../SideBar/SideBar";

const Moviedetails = () => {
  let navigateToHome = useNavigate();
  let { id } = useParams();

  let { data: movie, pending, error } = useFetch(
    "http://localhost:4000/movies/" + id
  );

  let handleDelete = () => {
    fetch("http://localhost:4000/movies/" + id, {
      method: "DELETE",
    }).then(() => {
      alert("Movie has been removed successfully");
      navigateToHome("/");
    });
  };

  return (
    <div className="movie-details">
      {error && <h1>{error}</h1>}
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
      {movie && (
        <div className="moviedetails">
          <div className="moviedetails_poster">
            <img src={movie.fullPoster} alt="fullPoster" />
            <iframe
              src={movie.trailer}
              frameborder="0"
              title="trailer"
            ></iframe>
          </div>
          <div className="moviedetail">
            <p>
              <span className="title">{movie.movieName}</span>
            </p>
            <hr />
            <p>
              <span className="moviedetail_story"> Hero : </span>
              {movie.hero}
            </p>
            <p>
              <span className="moviedetail_story">Director : </span>
              {movie.director}
            </p>
            <p>
              <span className="moviedetail_story"> Stoty Line : </span>
              {movie.storyLine}
            </p>

            <p>
              <span className="moviedetail_story">Genere : </span>
              {movie.genere}
            </p>
            <p>
              <span className="moviedetail_story">IMDB :</span>
              {movie.ratings}
            </p>
            <div className="moviedetail_btn">
              <button onClick={handleDelete}> Delete</button>
              <Link to={`/update${movie.id}`}>
                <button>Update movie</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <SideBar />
    </div>
  );
};

export default Moviedetails;
