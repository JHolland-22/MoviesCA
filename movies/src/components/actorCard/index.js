import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import img from '../../images/film-poster-placeholder.png';
import { ActorsContext } from "../../contexts/actorContext";

export default function ActorCard({ actor }) {
  const { favoriteActors = [], addToFavoriteActors, removeFromFavoriteActors } = useContext(ActorsContext);
  const isFavorite = favoriteActors.includes(actor.id);

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    if (isFavorite) {
      removeFromFavoriteActors(actor);
    } else {
      addToFavoriteActors(actor);
    }
  };

  return (
    <Card>
      <CardHeader
        avatar={
          isFavorite ? (
            <Avatar sx={{ backgroundColor: "red" }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
        alt={actor.name || "No name available"}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {actor.birth_day}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {actor.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleAddToFavorite}>
          <FavoriteIcon color={isFavorite ? "error" : "disabled"} fontSize="large" />
        </IconButton>
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info .......
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
