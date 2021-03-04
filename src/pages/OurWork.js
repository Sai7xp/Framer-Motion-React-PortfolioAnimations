import React from "react";
import athlete from "../images/athlete-small.png";
import theracer from "../images/theracer-small.png";
import goodtimes from "../images/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../components/animation";
import { useScroll } from "../components/useScrollHOOK";
const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Movie>
        <motion.h2 variants={fade} animate="show" initial="hidden">
          The Athlete
        </motion.h2>
        <motion.div
          variants={lineAnim}
          animate="show"
          initial="hidden"
          className="line"
        ></motion.div>
        <Link to="work/the-athlete">
          <img variants={photoAnim} src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img src={theracer} alt="athlete" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2>The GoodTimes</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <motion.img src={goodtimes} alt="athlete" />
        </Link>
      </Movie>
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 3rem 5rem;
  /* background: white; */
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 520px) {
    padding: 2rem 2rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
 
`;
export default OurWork;
