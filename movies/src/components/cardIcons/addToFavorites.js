import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/movieContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie }) => {
  // Access the MoviesContext to manage movie favorites
  const context = useContext(MoviesContext);

  // Function to handle adding the movie to favorites
  const handleAddToFavorites = (e) => {
    e.preventDefault(); // Prevent default behavior (e.g., page refresh on form submission)
    context.addToFavorites(movie); // Add the movie to favorites using the context function
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" /> {/* Favorite icon for the button */}
    </IconButton>
  );
};

export default AddToFavoritesIcon;
