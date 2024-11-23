import React, { useEffect, useState } from "react";
import { getActors } from "../../api/tmdb-api";
import ActorCard from "../actorCard";
import Grid from "@mui/material/Grid2";

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
      <Grid
        container
        spacing={2}
        sx={{ padding: "20px"}}
      >
        {actors.length > 0 ? (
          actors.map((actor) => (
            <Grid
              key={actor.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
            >
              <ActorCard actor={actor} />
            </Grid>
          ))
        ) : (
          <p>No actors found.</p>
        )}
      </Grid>
    </div>
  );
};

export default ActorList;
