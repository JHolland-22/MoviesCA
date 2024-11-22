import React, { useContext } from "react";
import { getLatestMovie } from "../api/tmdb-api"; // Ensure you have the correct API call
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieCard from "../components/movieCard";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MovieContext } from "../contexts/movieContext"; // Import MoviesContext

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getLatestMovie);
  const { addToMustWatch } = useContext(MovieContext); // Access the context

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data?.results || [];

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => (
        <IconButton
          aria-label="add to must watch"
          onClick={() => {
            addToMustWatch(movie); // Pass the entire movie object
            console.log("Must Watch Movies:", movie.id); // Log the ID to console for confirmation
          }}
        >
          <PlaylistAddIcon />
        </IconButton>
      )}
    />
  );
};

export default UpcomingMoviesPage;