import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {IMovieDBNowPlaying, Movie} from '../interfaces/movie.interface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<IMovieDBNowPlaying>('/now_playing');
    setNowPlaying(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {nowPlaying, isLoading};
};
