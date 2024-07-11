import "./MovieListing.scss";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

function MovieListing() {
  const { movies } = useSelector((state) => state.movies);
  return (
    <>
      {movies ? (
        <div className="movie-container">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
      ) : (
        <div className="empty-state-container">No movies found. Please try a different search.</div>
      )}
    </>
  );
}

export default MovieListing;
