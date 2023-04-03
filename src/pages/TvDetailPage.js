import React from "react";
import { motion } from "framer-motion";
import DetailTvContainer from "../containers/DetailTvContainer";

const TvDetailPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DetailTvContainer />
    </motion.div>
  );
};

export default TvDetailPage;
