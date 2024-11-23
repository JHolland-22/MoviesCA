import React from "react";
import {useParams} from "react-router-dom";
import PageTemplate from "../components/templateActorPage";
import {getActors} from "../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import ActorDetails from "../components/actorDetails";

const ActorPage = () => {
    const {id} = useParams();
    const {data: actor, error, isLoading, isError} = useQuery(
        ["actor", {id: id}],
        getActors
    );

    if (isLoading) {
        return <Spinner/>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {actor ? (
                <>
                    <PageTemplate actor={actor}>
                        <ActorDetails actor={actor}/>
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for actor details</p>
            )}
        </>
    );
};

export default ActorPage;