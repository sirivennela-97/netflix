import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../home/Home";
import "./header.css";
import "../home/Signup";
import SearchResults from "./SearchResults";
function Movie() {
  const navigate = useNavigate();
  const [rated, setRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [newmovies, setNewmovies] = useState([]);

  const [data, setData] = useState([]);
  // const [search, setSearch] = useState([]);
  //const [searchQuery, setSearchQuery] = useState("");

  const fetchdata = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=2bce79cc799af49fede4cc43ab85685c"
      )
      .then((response) => {
        console.log("API Response:", response);
        setData(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(data);

  // const searchMovies = () => {
  //   console.log("Search before filtering:", search);
  //   if (Array.isArray(search)) {
  //     const updateMovies = search.filter((movie) =>
  //       movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     console.log("Update Movies:", updateMovies);
  //     setData(updateMovies);
  //   }
  //   setSearchQuery("");
  // };

  useEffect(() => {
    fetchdata();
  }, []);

  // Rated fetch

  const rateddata = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2bce79cc799af49fede4cc43ab85685c"
      )
      .then((response) => {
        console.log("API response", response);
        setRated(response.data.results);
      })
      .catch((error) => {
        console.log.error(error);
      });
  };
  console.log(data);
  useEffect(() => {
    rateddata();
  }, []);

  // Popular fetch
  const populardata = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=2bce79cc799af49fede4cc43ab85685c"
      )
      .then((response) => {
        console.log("API response", response);
        setPopular(response.data.results);
      })
      .catch((error) => {
        console.log.error(error);
      });
  };
  console.log(data);
  useEffect(() => {
    populardata();
  }, []);

  //New fetch
  const newdata = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=2bce79cc799af49fede4cc43ab85685c"
      )
      .then((response) => {
        console.log("API response", response);
        setNewmovies(response.data.results);
      })
      .catch((error) => {
        console.log.error(error);
      });
  };
  console.log(data);
  useEffect(() => {
    newdata();
  }, []);

  return (
    <div className="box">
      <div>
        <SearchResults />
        <div className="header_name">
          <h6>UNLIMITED TV SHOWS & MOVIES</h6>
        </div>

        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        ></img>

        <button
          className="login__button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign in
        </button>
        <h1 className="con">Netflix Originals</h1>
        <h4 className="con">
          Netflix is the home of amazing original programming that you can’t
          find anywhere else. Movies, TV shows, specials and more, it’s all
          tailored specifically to you.
        </h4>
      </div>

      <h1 style={{ color: "white", margin: "20px" }}>Movieslist</h1>
      <div>
        <div>
          {data && data.length > 0 ? (
            <div className="sample">
              {data.map((list, id) => (
                <span key={id}>
                  <Link
                    className="link"
                    to="/moviesdetails"
                    state={{ list: list }}
                  >
                    <Card className="poster">
                      <Card.Img
                        src={`https://image.tmdb.org/t/p/w500${list.poster_path}`}
                        alt="images"
                      />
                      <p style={{ marginTop: "12px", color: "white" }}>
                        {list.original_title}
                      </p>
                    </Card>
                  </Link>
                </span>
              ))}
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
      <br />
      <br />
      <div>
        {/* POPULAR MOVIES */}
        <h1 style={{ color: "white", margin: "20px" }}>Popular Movies</h1>
        <div className="popular_movies">
          {popular.map((items, id) => {
            return (
              <span key={id}>
                <Link
                  className="link"
                  to="/moviespopular"
                  state={{ items: items }}
                >
                  <Card className="poster">
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                      alt="images"
                    />
                    <p style={{ marginTop: "12px", color: "white" }}>
                      {items.original_name}
                    </p>
                  </Card>
                </Link>
              </span>
            );
          })}
        </div>
      </div>
      {/* RATED MOVIES */}
      <div>
        <h1 style={{ color: "white", margin: "20px" }}>Rated Movies</h1>
        <div className="rated_movies">
          {rated.map((values, id) => {
            return (
              <span key={id}>
                <Link
                  className="link"
                  to="/Ratedmovies"
                  state={{ values: values }}
                >
                  <Card className="poster">
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/w500${values.poster_path}`}
                      alt="images"
                    />
                    <p style={{ color: "white" }}>{values.original_title}</p>
                  </Card>
                </Link>
              </span>
            );
          })}
        </div>
      </div>
      {/* NEW MOVIES */}
      <div>
        <h1 style={{ color: "white", margin: "20px" }}>New Movies</h1>
        <div className="new_movies">
          {newmovies.map((movie, id) => {
            return (
              <span key={id}>
                <Link className="link" to="/Newmovies" state={{ movie: movie }}>
                  <Card className="poster">
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="images"
                    />
                    <p style={{ color: "white" }}>{movie.original_name}</p>
                  </Card>
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Movie;
