import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Movie } from "./Home";
import { MovieService } from "../api/MovieService";

import styles from "./MovieDetail.module.scss";

const baseImageUrl = "https://image.tmdb.org/t/p/original";
const defaultImageUrl =
  "https://c4.wallpaperflare.com/wallpaper/644/305/118/pattern-black-gradient-texture-wallpaper-preview.jpg";

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>({} as Movie);

  async function getMovie() {
    const movieId = Number(id);
    const { data } = await MovieService.getMovieDetails(movieId);

    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  const imageUrl = movie.poster_path
    ? baseImageUrl + movie.poster_path
    : defaultImageUrl;

  return (
    <div className={styles.container}>
      <h3>{movie.title}</h3>
      <div className={styles.movieDetail}>
        <div className={styles.principal}>
          <img src={imageUrl} alt={movie.title} />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.info}>
            <div>
              <span>Overview:</span>
              {movie.overview}
            </div>
            <div>
              <span>Rate (IMDb): </span>
              {typeof movie.vote_average === "number"
                ? movie.vote_average.toFixed(1)
                : movie.vote_average}
            </div>
            <div>
              <span>Original language:</span>
              {movie.original_language}
            </div>
            <div>
              <span>Runtime:</span>
              {movie.runtime} min
            </div>
            <div>
              <span>Release date:</span>
              {movie.release_date}
            </div>
          </div>
          <div className={styles.buttonDiv}>
            <Link to={"/"}>
              <button className={styles.buttonGoBack}>Return</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
