import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CardMedia from "@mui/material/CardMedia";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'

const formControl = {
  margin: 1,
  minWidth: 100,
  backgroundColor: "rgb(0, 0, 0)"
};

export default function FilterActorsCard(props) {
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <Card
      sx={{
        backgroundColor: "rgb(102, 0, 51)"
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter actors.
        </Typography>

        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.nameFilter}
          onChange={handleTextChange}
        />
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter actors.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
