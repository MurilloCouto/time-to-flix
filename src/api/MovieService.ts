import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '678646561d95d0add551e1283998857c';

export function withBaseUrl(path: string) {
    return (
        `${BASE_URL}${path}?api_key=${API_KEY}`
        )
}

export class MovieService {
    static getMovies(movie?: string) {
    return movie
      ? axios(withBaseUrl(`search/movie`) + `&query=${movie}`)
      : axios(withBaseUrl('movie/popular'));
  }

    static getMovieDetails (id: number) {
        return axios(withBaseUrl(`movie/${id}`))
    }
}