import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";
const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h2>Contact us here</h2>
    </motion.div>
  );
};

export default ContactUs;
