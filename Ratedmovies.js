import React from "react";
import { useLocation } from "react-router-dom";
function Moviesdetails() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>
        <center>{location.state.values.original_title}</center>
        <div>
          <div className="movies_details">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/original${location.state.values.poster_path}`}
              alt="poster1"
            />
          </div>
          <div className="movie-info">
            <h2>{location.state.values.original_title}</h2>
            <p>
              <strong>Original Language:</strong>{" "}
              {location.state.values.original_language}
            </p>
            <p>
              <strong>Rating:</strong> {location.state.values.vote_average}/10
            </p>
            <p>
              <strong>Release Date:</strong>{" "}
              {location.state.values.release_date}
            </p>
            <p>
              <strong>Overview:</strong> {location.state.values.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Moviesdetails;
