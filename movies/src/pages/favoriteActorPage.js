import React, {useContext} from "react";
import PageTemplate from "../components/templateActorListPage";
import {ActorsContext} from "../contexts/actorContextContext";
import {useQueries} from "react-query";
import {getActor} from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";


const FavoriteActorPage = () => {
    const {favorites: actorIds } = useContext(ActorsContext);

    const favoriteActorQueries = useQueries(
        actorIds.map((actorId) => {
            return {
                queryKey: ["actor", { id: actorId }],
                queryFn: getActor,
            };
        })
    );
    const isLoading = favoriteActorQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const actors = favoriteActorQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    });


    return (
        <PageTemplate
            title="Favorite actors"
            actors={actors}
            action={(actor) => {
                return (
                    <>
                        <RemoveFromFavorites actor={actor} />
                        <WriteReview actor={actor} />
                    </>
                );
            }}
        />
    );
};

export default FavoriteActorPage;