import { useState, useEffect } from "react";
import "./Home.scss";
import MovieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { addMovie } from "../../store/Reducer";
import { useDispatch } from "react-redux";
import MovieListing from "../../components/MovieListing/MovieListing";

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const searchKey = search ? search : "Thor";
      const res = await MovieApi.get(
        `?apiKey=${APIKey}&s=${searchKey}&type=movie`
      );
      setTimeout(() => {
        dispatch(addMovie(res.data.Search));
      }, 500);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h3 style={{ margin: "1rem 0" }}>Movies</h3>
      <input type="text" placeholder="Search..." />
      <MovieListing />
    </div>
  );
}

export default Home;
