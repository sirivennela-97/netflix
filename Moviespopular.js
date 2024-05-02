import React from "react";

import { useLocation } from "react-router-dom";
function Moviespopular() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>
        <center>{location.state.items.original_name}</center>
        <div>
          <div className="movies_details">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${location.state.items.poster_path}`}
              alt="poster1"
            />
          </div>
          <div className="movie-info">
            <h2>{location.state.items.original_name}</h2>
            <p>
              <strong>Original Language:</strong>{" "}
              {location.state.items.original_language}
            </p>
            <p>
              <strong>Rating:</strong> {location.state.items.vote_average}/10
            </p>
            <p>
              <strong>Release Date:</strong> {location.state.items.release_date}
            </p>
            <p>
              <strong>Overview:</strong> {location.state.items.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Moviespopular;
