import React from "react";
import "./Addmovie.css";
import convert from "../../images/Addmovies/convert.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addmovie = () => {
  let navigateToHome = useNavigate();

  const [movieName, setMovieName] = useState("");
  const [hero, setHero] = useState("");
  const [director, setDirector] = useState("");
  const [genere, setGenere] = useState("");
  const [ratings, setRatings] = useState("");
  const [poster, setPoster] = useState("");
  const [fullPoster, setfullPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const [storyLine, setStoryLine] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    let newMovie = {
      movieName,
      hero,
      director,
      genere,
      ratings,
      poster,
      fullPoster,
      trailer,
      storyLine,
    };

    fetch("http://localhost:4000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    }).then(() => {
      alert("new movie added");
      navigateToHome("/");
    });
  };

  return (
    <div className="addmovie">
      <div className="addmovie_main">
        <div className="addmovie_side_img">
          <img src={convert} alt="side img" />
        </div>
        <form onSubmit={handleSubmit} className="addmovie_form">
          <h1>Upload New Movie</h1>
          <hr />
          <div className="addmovie_1">
            <div className="addmovie_div">
              <label>Movie Name</label>
              <input
                type="text"
                value={movieName}
                onChange={(e) => {
                  setMovieName(e.target.value);
                }}
              />
            </div>
            <div className="addmovie_div">
              <label>Hero</label>
              <input
                type="text"
                value={hero}
                onChange={(e) => {
                  setHero(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="addmovie_1">
            <div className="addmovie_div">
              <label>Director</label>
              <input
                type="text"
                value={director}
                onChange={(e) => {
                  setDirector(e.target.value);
                }}
              />
            </div>
            <div className="addmovie_div">
              <label>Genere</label>
              <input
                type="text"
                value={genere}
                onChange={(e) => {
                  setGenere(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="addmovie_1">
            <div className="addmovie_div">
              <label>Rating</label>
              <input
                type="number"
                step="0.1"
                max="5"
                min="0.1"
                value={ratings}
                onChange={(e) => {
                  setRatings(e.target.value);
                }}
              />
            </div>
            <div className="addmovie_div">
              <label>Movie Poster</label>
              <input
                type="url"
                value={poster}
                onChange={(e) => {
                  setPoster(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="addmovie_1">
            <div className="addmovie_div">
              <label>Movie trailer</label>
              <input
                type="url"
                value={trailer}
                onChange={(e) => {
                  setTrailer(e.target.value);
                }}
              />
            </div>
            <div className="addmovie_div">
              <label>Full Poster</label>
              <input
                type="url"
                value={fullPoster}
                onChange={(e) => {
                  setfullPoster(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="addmovie_div">
            <label>Synopsis</label>
            <textarea
              cols="30"
              rows="5"
              value={storyLine}
              onChange={(e) => {
                setStoryLine(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="addmovie_btn">
            <button type="submit">Add Movie</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Addmovie;
