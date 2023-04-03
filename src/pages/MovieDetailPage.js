import React from "react";
import { motion } from "framer-motion";
import DetailMovieContainer from "../containers/DetailMovieContainer";

const MovieDetailPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DetailMovieContainer />
    </motion.div>
  );
};

export default MovieDetailPage;
