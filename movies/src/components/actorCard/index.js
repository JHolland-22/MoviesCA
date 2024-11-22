import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import img from '../../images/film-poster-placeholder.png';
import { ActorContext } from "../../contexts/actorsContext";

export default function Actorcard({actor, action}){
    const{ favourites } = useContext(ActorContext);

    if (favourites.find((id) => id == actor.id)){
        actor.favourite = true;

    } else {
        actor.favourite = false;
    }

    return(
        <Card>
            <CardHeader>
                avatar={
                    actor.favourite ? (
                    <Avatar sx ={{backgroundColour: 'red'}}>
                        <FavoriteIcon/>
                    </Avatar>
                    ) : null
                }
                title={
                <Typography variant = "h5" component="p">
                    {actor.title}{" "}
                </Typography>
                }
        
            </CardHeader>
            <CardMedia>
            sx={{height: 500}}
            image={
                actor.poster.path
                ?'https://image.tmdb.org/t/p/w500/${actor.profile_path}'
                :img
            }
            </CardMedia>
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                    <Typography variant = "h6" component = "p">
                        <CalendarIcon fontSize = "small">
                            {actor.birth_day}
                        </CalendarIcon>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant = "h6" component = "p">
                        <StarRateIcon fontSize = "small">
                            {"   "}{actor.vote_average}{" "}
                        </StarRateIcon>
                    </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions disableSpacing>
                {action && action(movie)}
                <Link to = {`/actor/${movie.id}`}>
                <Button variant = "outlined" size="medium" colour = "primary">
            
                More info .......
                </Button>
                </Link>
            </CardActions>
        </Card>
    )
}
