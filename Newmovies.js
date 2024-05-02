import React from "react";
import { useLocation } from "react-router-dom";
function Newmovies() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>
        <center>{location.state.movie.original_title}</center>
        <div>
          <div className="movies_details">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/original${location.state.movie.poster_path}`}
              alt="poster1"
            />
          </div>
          <div className="movie-info">
            <h2>{location.state.movie.original_title}</h2>
            <p>
              <strong>Original Language:</strong>{" "}
              {location.state.movie.original_language}
            </p>
            <p>
              <strong>Rating:</strong> {location.state.movie.vote_average}/10
            </p>
            <p>
              <strong>Release Date:</strong> {location.state.movie.release_date}
            </p>
            <p>
              <strong>Overview:</strong> {location.state.movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Newmovies;
