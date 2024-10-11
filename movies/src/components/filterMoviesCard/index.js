import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';

// Define styling for form control
const formControl = {
  margin: 1,
  minWidth: 220,
  backgroundColor: "rgb(255, 255, 255)"
};

export default function FilterMoviesCard(props) {
  // State for genres, including the 'All' option with id '0'
  const [genres, setGenres] = useState([{ id: '0', name: "All" }]);

  // Fetch genres from the API and populate the genre dropdown
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY
    )
      .then((res) => res.json())
      .then((json) => {
        return json.genres;  // Extract genres array from the response
      })
      .then((apiGenres) => {
        setGenres([genres[0], ...apiGenres]); // Add API genres to state
      })
      .catch((error) => {
        console.error("Error fetching genres:", error); // Handle any errors
      });
      // eslint-disable-next-line
  }, []);

  // Function to handle changes in the search field and genre selection
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // Pass changes to the parent component
  };

  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value); // Handle name filter change
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value); // Handle genre filter change
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
          Filter the movies.
        </Typography>
        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter} // Pass the current title filter
          onChange={handleTextChange} // Handle changes in the text field
        />
        <FormControl sx={{ ...formControl }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter} // Pass the current genre filter
            onChange={handleGenreChange} // Handle changes in the genre dropdown
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
      </CardContent>
    </Card>
  );
}
