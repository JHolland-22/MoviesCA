import React, { useEffect, useState } from "react";
import { getActors } from "../../api/tmdb-api";
import ActorCard from "../actorCard";
import Grid from "@mui/material/Grid2";

const ActorList = () => {
  const [actors, setActors] = useState([]); // State to store the list of actors.

  useEffect(() => {
    // Fetch the list of actors when the component mounts.
    getActors()
      .then((data) => {
        setActors(data); // Update the state with fetched actor data.
      })
      .catch((error) => {
        console.error("Error fetching actors:", error); // Log any errors during fetch.
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount.

  return (
    <div>
      <Grid
        container
        spacing={2} // Adds space between grid items.
        sx={{ padding: "20px" }} // Adds padding around the grid container.
      >
        {actors.length > 0 ? (
          // If actors exist, map through the list and display each actor in a grid item.
          actors.map((actor) => (
            <Grid
              key={actor.id} // Unique key for each actor.
              item
              xs={12} // Full width on extra-small screens.
              sm={6} // Half width on small screens.
              md={4} // One-third width on medium screens.
              lg={3} // One-fourth width on large screens.
              xl={2} // One-sixth width on extra-large screens.
            >
              <ActorCard actor={actor} /> {/* Display individual actor details in a card. */}
            </Grid>
          ))
        ) : (
          // If no actors are available, display a message.
          <p>No actors found.</p>
        )}
      </Grid>
    </div>
  );
};

export default ActorList;
