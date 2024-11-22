// src/App.js
import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMovies from "./pages/UpcomingMovies"; // Import the new Upcoming Movies page
import SiteHeader from "./components/siteHeader";
import MovieContextProvider from "./contexts/movieContext";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <MovieContextProvider> {/* Wraps Routes to provide context */}
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/reviews/:id" element={<MovieReviewPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/upcoming" element={<UpcomingMovies />} /> {/* New Upcoming Movies route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MovieContextProvider>
    </BrowserRouter>
  );
};

export default App;