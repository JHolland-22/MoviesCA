import React from "react";
import {useQuery} from "react-query";
import {getActors} from "../api/tmdb-api";
import ActorListPageTemplate from "../components/templateActorPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const ActorListPage = () => {
    const {data, error, isLoading, isError} = useQuery('actors', getActors);

    if (isLoading) {
        return <Spinner/>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }


    return (
        <ActorListPageTemplate
            title="Popular Actors"
            actors={data.results}
            action={(actors) => (
            <AddToFavoritesIcon actor={actors}/>
                
            )}
        />
    );
};

export default ActorListPage;
