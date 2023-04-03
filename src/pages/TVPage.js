import React from "react";
import { motion } from "framer-motion";
import IssueContainer from "../containers/IssueContainer";
import TvContainer from "../containers/TvContainer";

const TVPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <IssueContainer />
      <TvContainer />
    </motion.div>
  );
};

export default TVPage;
