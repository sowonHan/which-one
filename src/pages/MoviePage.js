import React from "react";
import { motion } from "framer-motion";
import MovieContainer from "../containers/MovieContainer";
import BoxOffice from "./../components/boxoffice/BoxOffice";

const MoviePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BoxOffice />
      <MovieContainer />
    </motion.div>
  );
};

export default MoviePage;
