import React from "react";
import "./UpdateMovie.css";
import netflix from "../../images/Addmovies/netflix.jpg";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const Addmovie = () => {
  let { id } = useParams();
  let { data: movie } = useFetch("http://localhost:4000/movies/" + id);

  const [movieName, setMovieName] = useState("");
  const [hero, setHero] = useState("");
  const [director, setDirector] = useState("");
  const [genere, setGenere] = useState("");
  const [ratings, setRatings] = useState("");
  const [poster, setPoster] = useState("");
  const [fullPoster, setfullPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const [storyLine, setStoryLine] = useState("");

  let navigateToHome = useNavigate();

  useEffect(() => {
    if (movie) {
      setMovieName(movie.movieName);
      setHero(movie.hero);
      setDirector(movie.director);
      setGenere(movie.genere);
      setRatings(movie.ratings);
      setPoster(movie.poster);
      setfullPoster(movie.fullPoster);
      setTrailer(movie.trailer);
      setStoryLine(movie.storyLine);
    }
  }, [movie]);

  let handleUpdate = (e) => {
    e.preventDefault();

    let replacingMovie = {
      movieName,
      hero,
      director,
      genere,
      ratings,
      trailer,
      poster,
      fullPoster,
      storyLine,
    };

    fetch(`http://localhost:4000/movies/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(replacingMovie),
    }).then(() => {
      alert("Changes Updated");
      navigateToHome("/");
    });
  };

  return (
    <div className="addmovie">
      <div className="addmovie_main">
        <div className="addmovie_side_img">
          <img src={netflix} alt="side img" />
        </div>
        <form onSubmit={handleUpdate} className="addmovie_form">
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
