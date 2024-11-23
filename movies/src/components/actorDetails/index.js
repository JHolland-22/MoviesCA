import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import MovieCard from "../movieCard";
import { getActorMovies } from "../../api/tmdb-api";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};

const ActorDetails = ({ actor }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchActorMovies = async () => {
      try {
        const data = await getActorMovies(actor.id);
        setMovies(data.cast.slice(0, 10));
      } catch (error) {
        console.error("Error fetching actor movies:", error);
      }
    };

    fetchActorMovies();
  }, [actor.id]);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {actor.biography || "No biography available."}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
        <Chip
          icon={<StarRate />}
          label={`Known for: ${actor.known_for_department || "N/A"}`}
        />
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <Chip
          icon={<AccessTimeIcon />}
          label={`Born: ${actor.birthday || "N/A"}`}
        />
        <Chip
          icon={<MonetizationIcon />}
          label={`Net Worth: ${
            actor.revenue ? actor.revenue.toLocaleString() : "N/A"
          }`}
        />
        <Chip
          icon={<StarRate />}
          label={`Vote Average: ${actor.popularity || "N/A"}`}
        />
      </Paper>

      <Typography variant="h6" component="h3" sx={{ marginTop: 2 }}>
        Movies
      </Typography>
      <Paper component="ul" sx={{ ...root }}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </Paper>
    </>
  );
};

export default ActorDetails;
