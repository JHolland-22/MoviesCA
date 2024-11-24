import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getTopMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../contexts/movieContext";

const TopMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery("Top Rated", getTopMovies);
  const { addToMustWatch } = useContext(MoviesContext); 

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data?.results || [];

  return (
    <PageTemplate
      title="Top Rated"
      movies={movies}
      action={(movie) => (
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

export default TopMoviesPage;
