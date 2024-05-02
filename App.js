import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/home/Signup";
// import Movieslist from "./components/header/Movieslist";
import Ratedmovies from "./components/header/Ratedmovies";
import Movie from "./components/header/Movie";
import Moviespopular from "./components/header/Moviespopular";
import Newmovies from "./components/header/Newmovies";
import Moviesdetails from "./components/header/Moviesdetails";
import SearchResults from "./components/header/SearchResults";
import Login from "./components/home/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ratedmovies" element={<Ratedmovies />}></Route>
          <Route path="/moviespopular" element={<Moviespopular />}></Route>
          <Route path="/newmovies" element={<Newmovies />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/moviesdetails" element={<Moviesdetails />}></Route>
          {/* <Route path="/movieslist" element={<Movieslist />}></Route> */}
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
