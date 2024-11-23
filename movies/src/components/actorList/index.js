import React, { useEffect, useState } from "react";
import { getActors } from "../../api/tmdb-api";
import ActorCard from "../actorCard";

const ActorList = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getActors()
      .then((data) => {
        setActors(data);
      })
      .catch((error) => {
        console.error("Error fetching actors:", error);
      });
  }, []);

  return (
    <div>
      <h2>Popular Actors</h2>
      <div className="actor-grid">
        {actors.length > 0 ? (
          actors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))
        ) : (
          <p>No actors found.</p>
        )}
      </div>
    </div>
  );
};

export default ActorList;
