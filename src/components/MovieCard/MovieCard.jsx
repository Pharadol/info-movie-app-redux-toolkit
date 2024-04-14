import "./MovieCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <Link to={`movie/${movie.imdbID}`}>
        <div className="card-image">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="card-content">
          <span className="card-title">{movie.Title}</span>
          <p>Year : {movie.Year}</p>
        </div>
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
