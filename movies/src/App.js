import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMovies from "./pages/UpcomingMovies";
import SiteHeader from "./components/siteHeader";
import MovieContextProvider from "./contexts/movieContext";
import ActorListPage from "./pages/actorListPage";
import ActorDetailsPage from "./pages/actorDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <MovieContextProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/reviews/:id" element={<MovieReviewPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/upcoming" element={<UpcomingMovies />} />
          <Route path="actors"element={<ActorListPage/>} />
          <Route paht="actors/id" element={<ActorDetailsPage/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MovieContextProvider>
    </BrowserRouter>
  );
};

export default App;
