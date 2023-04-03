import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import NotFound from "./pages/NotFound";
import MovieDetailPage from "./pages/MovieDetailPage";
import TvDetailPage from "./pages/TvDetailPage";
import JoinPage from "./pages/JoinPage";
import SignInPage from "./pages/SignInPage";
import MyPage from "./pages/MyPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/tv/:id" element={<TvDetailPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
