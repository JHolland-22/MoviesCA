import React, { useState } from "react";
import Header from "../headerActorList";
import FilterCard from "../filterActorsCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid2";

function ActorListPageTemplate({ actors = [], title, selectFavorite }) {
  const [nameFilter, setNameFilter] = useState("");

  const displayedActors = actors.filter((actor) => 
     actor.name?.toLowerCase().includes(nameFilter.toLowerCase())
);

const handleChange = (type, value) => {
  if (type === "name") setNameFilter(value);
};

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "10px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
          />
        </Grid>
        <ActorList selectFavorite={selectFavorite} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;