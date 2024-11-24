import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { ActorsContext } from "../contexts/actorContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";

const FavoriteActorsPage = () => {
  const { favoriteActors: actorIds } = useContext(ActorsContext);

  const favoriteActorQueries = useQueries(
    actorIds.map((actorId) => ({
      queryKey: ["actor", { id: actorId }],
      queryFn: getActor,
    }))
  );

  const isLoading = favoriteActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favoriteActorQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="Favorite Actors"
      actors={actors}
      action={(actor) => <RemoveFromFavorites actor={actor} />}
    />
  );
};

export default FavoriteActorsPage;
