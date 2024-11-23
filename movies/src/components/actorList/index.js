import React from "react";
import Actor from "../actorCard/";
import Grid from "@mui/material/Grid2";

const ActorList = (props) => {
  let actorCards = props.actors.map((actor) => (
    <Grid key={actor.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
    <Actor key={actor.id} actor={actor} action={props.action} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {actorCards.length > 0 ? actorCards : <p>No actors available.</p>}
    </Grid>
  );
};

export default ActorList;