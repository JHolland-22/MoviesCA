import React, { useState } from "react";
import Header from "../headerActorList";
import FilterActorsCard from "../filterActorsCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid2";

function ActorListPageTemplate({ actors = [], title, action }) {
  const [nameFilter, setNameFilter] = useState("");

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  const displayedActors = actors.filter((actor) =>
    actor.name && actor.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid
          key="find"
          size={{ xs: 10, sm: 7, md: 6, lg: 3, xl: 3 }}
          sx={{ padding: "20px" }}
        >
          <FilterActorsCard
            onUserInput={handleChange}
            nameFilter={nameFilter}
          />
        </Grid>
        <ActorList action={action} actors={displayedActors} />
      </Grid>
    </Grid>
  );
}

export default ActorListPageTemplate;
