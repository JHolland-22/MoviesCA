// src/contexts/moviesContext.js

import React, { useState } from "react";

export const MovieContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]); // New must-watch state

  const addToFavorites = (movie) => {
    if (!favorites.includes(movie.id)) setFavorites([...favorites, movie.id]);
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((id) => id !== movie.id));
  };

  const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) setMustWatch([...mustWatch, movie.id]);
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        mustWatch,
        addToFavorites,
        removeFromFavorites,
        addToMustWatch,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MoviesContextProvider;