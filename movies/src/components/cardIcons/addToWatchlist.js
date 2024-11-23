import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/movieContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlists = (e) => {
    e.preventDefault();
    context.addToWatchlist(movie);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlists}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;