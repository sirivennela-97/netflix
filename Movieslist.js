import React, { useState, useEffect } from "react";
import axios from "axios";

const Movieslist = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=2bce79cc799af49fede4cc43ab85685c"
      );
      setData(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    // Fetch data
    fetchMovies();
  }, []);

  // Filter movies based on search query
  const filteredMovies = data.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle button click
  const handleButtonClick = () => {
    setShowResults(true);
  };

  return (
    <div>
      <div>
        {/* Search input and button */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter movie name"
        />
        <button onClick={handleButtonClick}>Search</button>
      </div>

      <div>
        {/* Display filtered movies after button click */}
        {showResults &&
          filteredMovies.map((movie) => (
            <div key={movie.id}>
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
              <p style={{ color: "white" }}>{movie.original_title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movieslist;
