import React from "react";
import home1 from "../images/15.png";
import { motion } from "framer-motion";
import { About, Description, Hide, Image } from "../Styles";
import { titleAnim, photoAnim } from "../pages/animation";
import Wave from "./wave";
import styled from "styled-components";
function AboutSection() {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 3 } },
  };
  const slideAnimation = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };
  return (
    <About>
      <Description>
        <motion.div
        // variants={slideAnimation}
        // initial="hidden"
        // animate="show"
        // className="title"
        >
          <Hide>
            <motion.h2
              variants={titleAnim}
              // animate={{ opacity: 1, transition: { duration: 2 } }}
              // initial={{ opacity: 0 }}
            >
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              variants={titleAnim}
              // variants={titleAnimation}
              // initial="hidden"
              // animate="show"
            >
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us to get a ticket for Mars Planet and stay there forever
          Lorem ipsum dolor sit amet.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <motion.img
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={home1}
          alt="a guy holding the camera"
        />
      </Image>
      <Wave />
    </About>
  );
}
export default AboutSection;
