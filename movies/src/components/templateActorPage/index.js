import React from "react";
import ActorHeader from "../actorHeader";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const TemplateActorPage = ({ actor, children }) => {
  const { id } = actor;

  const { data, error, isLoading, isError } = useQuery(
    ['images', id],
    () => getActorImages(id),
    {
      enabled: !!id,
    }
  );

  const images = data?.profiles || [];

  if (!actor || !id) {
    return <h1>Actor details not available. Please try again later.</h1>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error?.message || 'Failed to load images.'}</h1>;
  }

  return (
    <>
      <ActorHeader actor={actor} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <ImageList sx={{ height: "100vh" }} cols={1}>
            {images.length > 0 ? (
              images.map((image) => (
                <ImageListItem key={image.file_path} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.file_path}
                  />
                </ImageListItem>
              ))
            ) : (
              <p>No images available</p>
            )}
          </ImageList>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;