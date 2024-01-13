import { Link } from "react-router-dom";

import styles from "./MovieCard.module.scss";

import { Movie } from "../pages/Home";

const baseImageUrl = "https://image.tmdb.org/t/p/w780";
const defaultImageUrl =
  "https://c4.wallpaperflare.com/wallpaper/644/305/118/pattern-black-gradient-texture-wallpaper-preview.jpg";

export function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = movie.poster_path
    ? baseImageUrl + movie.poster_path
    : defaultImageUrl;
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieImage}>
        <img src={imageUrl} alt={movie.title} />
      </div>
      <div className={styles.movieTitle}>
        <h5>{movie.title}</h5>
        <Link to={`/movie/${movie.id}`} className={styles.buttonDetail}>
          Movie Details
        </Link>
      </div>
    </div>
  );
}
