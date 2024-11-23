import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {actor.overview || "No overview available."}
      </Typography>
      <Paper component="ul" sx={{ ...root }}></Paper>
      <Paper component="ul" sx={{ ...root }}>
        <Chip
          icon={<AccessTimeIcon />}
          label={`${actor.runtime || "N/A"} min`}
        />
        <Chip
          icon={<MonetizationIcon />}
          label={`${actor.revenue ? actor.revenue.toLocaleString() : "N/A"}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${actor.vote_average || "N/A"} (${actor.vote_count || 0})`}
        />
        <Chip label={`Released: ${actor.release_date || "N/A"}`} />
      </Paper>
      <Paper component="ul" sx={{ ...root }}></Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
        }}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Drawer Content Here
        </Typography>
      </Drawer>
    </>
  );
};


export default ActorDetails;
