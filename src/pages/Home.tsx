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
  popularity: string;
  overview: string;
  original_language: string;
  budget: string;
}

export function Home({ searchValueProp }: { searchValueProp: string }) {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  }

  async function searchMovie(movieString: string) {
    const {
      data: { results },
    } = await MovieService.searchMovies(movieString);
    setMovies(results);
  }

  useEffect(() => {
    if (movies.length === 0) {
      getMovies();
    }
    getMovies();
  }, []);

  useEffect(() => {
    if (searchValueProp) {
      searchMovie(searchValueProp);
    }
    if (searchValueProp === "") {
      getMovies();
    }
  }, [searchValueProp]);

  return (
    <section className={styles.home}>
      {movies.map((movie) => (
        <div className={styles.cards} key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </section>
  );
}
