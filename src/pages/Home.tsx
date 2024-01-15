import { useEffect, useState } from "react";

import { MovieService } from "../api/MovieService";
import { MovieCard } from "../components/MovieCard";

import styles from "./Home.module.scss";

export interface Movie {
  id: number;
  index: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  original_language: string;
  runtime: number;
  release_date: string;
}

export function Home({ searchValueProp }: { searchValueProp: string }) {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function fetchMovies(searchString?: string) {
    const {
      data: { results },
    } = searchString
      ? await MovieService.searchMovies(searchString)
      : await MovieService.getMovies();

    setMovies(results);
  }

  useEffect(() => {
    fetchMovies(searchValueProp);
  }, [searchValueProp]);

  return (
    <section>
      {movies.length === 0 ? (
        <p className={styles.notFoundFilm}>
          Parece que não encontramos nenhum filme com esse nome em nosso banco
          de dados.
        </p>
      ) : (
        <div className={styles.home}>
          {movies.map((movie) => (
            <div className={styles.cards} key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
