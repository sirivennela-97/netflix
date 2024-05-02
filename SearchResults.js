import React, { useState, useCallback } from "react";
import axios from "axios";

function SearchResults() {
  const [search, setSearch] = useState([]);
  const [searchquery, setquery] = useState([]);
  const discoverendpoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=2bce79cc799af49fede4cc43ab85685c";
  const searchendpoints =
    "https://api.themoviedb.org/3/search/movie?api_key=2bce79cc799af49fede4cc43ab85685c";

  const fetchdata = useCallback(async () => {
    try {
      const endpoints = searchquery ? searchendpoints : discoverendpoint;
      const response = await axios.get(endpoints, {
        params: {
          query: searchquery,
        },
      });
      const { results } = response.data;
      setSearch(results);
    } catch (error) {
      console.error("something went wrong", error);
    }
  }, [searchquery, discoverendpoint, searchendpoints]);

  const handleShowAll = () => {
    fetchdata();
  };

  return (
    <div>
      <div className="searchBar">
        <input
          type="text"
          value={searchquery}
          onChange={(e) => {
            setquery(e.target.value);
          }}
        ></input>
        <button onClick={handleShowAll}>Show All</button>
      </div>
      <div className="samp">
        {search.length > 0 ? (
          search.map((li) => (
            <div key={li.id}>
              {li.poster_path ? (
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w500${li.poster_path}`}
                  alt="img"
                />
              ) : (
                <p>No poster available</p>
              )}
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
