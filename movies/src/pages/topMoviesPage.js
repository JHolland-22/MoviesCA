import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "react-query";
import { getTopMovies, getGenres } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../contexts/movieContext";
import Pagination from "@mui/material/Pagination";

const TopMoviesPage = () => {
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const { addToMustWatch } = useContext(MoviesContext);

  const { data, error, isLoading, isError } = useQuery(
    ["topRated", page],
    () => getTopMovies(page),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    getGenres().then((response) => {
      if (Array.isArray(response)) {
        setGenres(response);
      }
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data?.results || [];
  const totalPages = data?.total_pages || 1;

  const getMovieGenres = (movie) => {
    if (!genres || genres.length === 0 || !movie.genre_ids) {
      return [];
    }
    return movie.genre_ids
      .map((genreId) => genres.find((genre) => genre.id === genreId))
      .filter((genre) => genre);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
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
        getGenresForMovie={getMovieGenres}
      />
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
        }}
      />
    </>
  );
};

export default TopMoviesPage;
