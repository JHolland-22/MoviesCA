import React, { useState } from "react";
import Header from "../headerActorList";
import FilterActorsCard from "../filterActorsCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid2";

function ActorListPageTemplate({ actors = [], title, action }) {
  const [nameFilter, setNameFilter] = useState(""); // State to store the search filter value for actor names

  // Handle changes in the search filter
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value); // Only handle name filter changes
  };

  // Filter actors based on the search filter
  const displayedActors = actors.filter((actor) =>
    actor.name && actor.name.toLowerCase().includes(nameFilter.toLowerCase()) // Filter actors based on name
  );

  return (
    <Grid container>
      {/* Header component to display the title */}
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid
          key="find" // Grid for filter input
          size={{ xs: 10, sm: 7, md: 6, lg: 3, xl: 3 }}
          sx={{ padding: "20px" }}
        >
          {/* FilterActorsCard handles user input for filtering actors */}
          <FilterActorsCard
            onUserInput={handleChange} // Passes the handleChange function to handle input changes
            nameFilter={nameFilter} // Passes the current filter value to the card
          />
        </Grid>
        {/* ActorList displays the filtered list of actors */}
        <ActorList action={action} actors={displayedActors} />
      </Grid>
    </Grid>
  );
}

export default ActorListPageTemplate;
