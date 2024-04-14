import { useEffect } from "react";
import "./Home.scss";
import MovieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { addMovie } from "../../store/moviesSlice";
import { useDispatch } from "react-redux";
import MovieListing from "../../components/MovieListing/MovieListing";
import { useSelector } from "react-redux";
import { setSearch } from "../../store/searchSlice";

function Home() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);

  useEffect(() => {
    const fetchMovies = async () => {
      const searchKey = search ? search.trim() : "Thor";
      const res = await MovieApi.get(
        `?apiKey=${APIKey}&s=${searchKey}&type=movie`
      );
      setTimeout(() => {
        dispatch(addMovie(res.data.Search));
      }, 500);
    };

    fetchMovies();
  }, [search]);

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <MovieListing />
    </div>
  );
}

export default Home;
