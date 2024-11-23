import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";

const ActorDetailsPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActorDetails = async () => {
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

  useEffect(() => {
    const fetchActorImages = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
        );
        if (!response.ok) throw new Error("Failed to fetch actor images");
        const imageData = await response.json();
        setImages(imageData.profiles || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchActorImages();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <h1>{error}</h1>;

  return actor ? (
    <PageTemplate actor={actor}>
      <ActorDetails actor={actor} images={images} />
    </PageTemplate>
  ) : (
    <p>Waiting for actor details</p>
  );
};

export default ActorDetailsPage;
