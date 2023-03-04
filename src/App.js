import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import NotFound from "./pages/NotFound";
import MovieDetailPage from "./pages/MovieDetailPage";
import TvDetailPage from "./pages/TvDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/movie" element={<MoviePage />}>
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
          <Route path="/tv" element={<TvPage />}>
            <Route path=":id" element={<TvDetailPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
