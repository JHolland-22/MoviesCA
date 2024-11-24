import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const formControl = {
  margin: 1,
  minWidth: 220,
  backgroundColor: "rgb(255, 255, 255)"
};

export default function FilterActorsCard(props) {
  const handleTextChange = (e) => {
    props.onUserInput("name", e.target.value);
  };

  return (
    <Card 
      sx={{
        backgroundColor: "rgb(204, 204, 0)"
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter actors by name.
        </Typography>

        <TextField
          sx={{
            ...formControl,
            backgroundColor: "#ffffff", 
            "& .MuiInputBase-root": {
              color: "#000"
            }
          }}
          id="actor-name-search"
          label="Search actors"
          type="search"
          variant="filled"
          value={props.nameFilter || ""}
          onChange={handleTextChange}
          fullWidth
        />
      </CardContent>
    </Card>
  );
}
