import React from "react";
import "./Searchpage.css";
import { useParams } from "react-router-dom";
import DisplayMoviesList from "../../components/MoviesList/DisplayMoviesList";
import useFetch from "../useFetch";

const Searchpage = () => {
  let searchFilter = (movie) => {
    return (
      movie.movieName.toLowerCase().includes(searchVal.toLowerCase()) ||
      movie.hero.toLowerCase().includes(searchVal.toLowerCase()) ||
      movie.genere.toLowerCase().includes(searchVal.toLowerCase())
    );
  };
  let { searchVal } = useParams();
  let { data: movies } = useFetch("http://localhost:4000/movies");

  return (
    <div className="searchpage">
      <p>Results</p>
      <div className="searchpage_movieslist">
        {movies && <DisplayMoviesList movies={movies.filter(searchFilter)} />}
      </div>
    </div>
  );
};
export default Searchpage;
