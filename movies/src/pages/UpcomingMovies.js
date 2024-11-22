import React from 'react';
import { getLatestMovie } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import MovieCard from '../components/movieCard';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'; 
import IconButton from '@mui/material/IconButton'; 
import React, { useContext } from "react";
import { getLatestMovie } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieCard from "../components/movieCard";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../contexts/moviesContext"; 

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies);
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);
  const { addToMustWatch } = useContext(MoviesContext); 

  if (isLoading) {
    return <Spinner />;
@@ -26,12 +28,18 @@
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => (
        <IconButton aria-label="add to watchlist">
        <IconButton
          aria-label="add to must watch"
          onClick={() => {
            addToMustWatch(movie); 
            console.log("Must Watch Movies:", movie.id); 
          }}
        >
          <PlaylistAddIcon />
        </IconButton>
      )}
    />
  );
};

export default UpcomingMoviesPage;