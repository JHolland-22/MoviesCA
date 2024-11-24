import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/movieContext";

const RemoveFromFavoritesIcon = ({ movie }) => {
  // Access the MoviesContext to manage the list of favorite movies
  const context = useContext(MoviesContext);

  // Function to handle removing the movie from the favorites list
  const handleRemoveFromFavorites = (e) => {
    e.preventDefault(); // Prevent default behavior (e.g., form submission)
    context.removeFromFavorites(movie); // Remove the movie from the favorites list using the context function
  };

  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      {/* Icon button with delete icon for removing a movie from favorites */}
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;
