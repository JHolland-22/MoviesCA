import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ActorDetails from "../components/actorDetails";

const ActorPage = () => {
  // Get the actor ID from the URL parameters using useParams
  const { id } = useParams();

  // Fetch actor data using react-query's useQuery hook
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }], // Unique query key with actor id
    getActors // Function to fetch actor data from the API
  );

  // If the data is still loading, show a spinner
  if (isLoading) {
    return <Spinner />;
  }

  // If there was an error fetching the data, display the error message
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        // If actor data is available, render the PageTemplate and ActorDetails
        <>
          <PageTemplate title="Discover Actors" actor={actor}>
            <ActorDetails actor={actor} />
          </PageTemplate>
        </>
      ) : (
        // If actor data is not available yet, show a waiting message
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;
