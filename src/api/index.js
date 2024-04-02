import { api_key } from "../constants";
import { apiRequest } from "./axios";

const base_url = "https://api.themoviedb.org/3";

const trending_movies_url = `${base_url}/trending/movie/day?api_key=${api_key}`;
const upcoming_movies_url = `${base_url}/movie/upcoming?api_key=${api_key}`;
const top_rated_url = `${base_url}/movie/top_rated?api_key=${api_key}`;
const popular_url = `${base_url}/movie/popular?api_key=${api_key}`;

export const getTrendingMovies = async () => await apiRequest(trending_movies_url);
export const getUpcomingMovies = async () => await apiRequest(upcoming_movies_url);
export const getTopRatedMovies = async () => await apiRequest(top_rated_url);
export const getPopularMovies = async () => await apiRequest(popular_url);
export const image_url = (url, width) => (url ? `https://image.tmdb.org/t/p/w${width}/${url}` : null);
