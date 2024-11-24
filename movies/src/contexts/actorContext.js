import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favoriteActors, setFavoriteActors] = useState([]);

  const addToFavoriteActors = (actor) => {
    if (!favoriteActors.includes(actor.id)) {
      setFavoriteActors([...favoriteActors, actor.id]);
    }
  };

  const removeFromFavoriteActors = (actor) => {
    setFavoriteActors(favoriteActors.filter((actorId) => actorId !== actor.id));
  };

  return (
    <ActorsContext.Provider
      value={{
        favoriteActors,
        addToFavoriteActors,
        removeFromFavoriteActors,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
