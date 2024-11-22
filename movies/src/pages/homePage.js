import React, { useState, useEffect } from "react";
import { getMovies, getGenres } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const HomePage = () => {
  const [genres, setGenres] = useState([]);

  const { data, error, isLoading, isError } = useQuery('discover', getMovies);

  useEffect(() => {
    getGenres().then((response) => {
      if (Array.isArray(response)) {
        setGenres(response);
      } else {
        console.error("Expected genres to be an array, but got:", response);
      }
    }).catch((error) => {
      console.error("Error fetching genres:", error);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data?.results || [];

  const getMovieGenres = (movie) => {
    if (!genres || genres.length === 0 || !movie.genre_ids) {
      return [];
    }

    return movie.genre_ids
      .map((genreId) => genres.find((genre) => genre.id === genreId))
      .filter((genre) => genre);
  };

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
      getGenresForMovie={getMovieGenres}
    />
  );
};

export default HomePage;
