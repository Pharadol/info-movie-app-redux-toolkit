import { useState, useEffect } from "react";
import movieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { useParams } from "react-router-dom";
import './MovieDetail.scss'

function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const res = await movieApi
        .get(`?apiKey=${APIKey}&i=${id}&plot=full`)
        .catch((error) => {
          console.error("Error ", error);
        });
      setMovie(res.data);
      setLoading(true);
    };
    fetchMovieDetail();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="movie-detail-container">
          <div className="movie-detail-img">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie-detail-info">
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <div>
              <strong>Released : {movie.Released}</strong>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="loading">Loading...</h4>
      )}
    </>
  );
}

export default MovieDetail;
