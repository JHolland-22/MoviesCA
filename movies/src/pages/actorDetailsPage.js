import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";

const ActorDetailsPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActorDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
        );
        if (!response.ok) throw new Error("Failed to fetch actor details");
        const actorData = await response.json();
        setActor(actorData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActorDetails();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <h1>{error}</h1>;

  return actor ? (
    <PageTemplate actor={actor}>
      <ActorDetails actor={actor} />
    </PageTemplate>
  ) : (
    <p>Waiting for actor details...</p>
  );
};

export default ActorDetailsPage;
