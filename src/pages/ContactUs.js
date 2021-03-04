import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, lineAnim } from "../components/animation";
import styled from "styled-components";
import { FaCat, FaFire, FaLink, FaMailBulk } from "react-icons/fa";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >

      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <motion.div
        variants={lineAnim}
        animate="show"
        initial="hidden"
        className="line"
      ></motion.div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Hide>
          <Social variants={titleAnim}>
            <FaCat size="26px" />
            <h2>Socials</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            {/* <Circle /> */}
            <FaFire size="26px" color="" />
            <h2>Send us a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            {/* <Circle /> */}
            <FaLink size="26px" />
            <h2>Drop an email.</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  @media (max-width: 520px) {
    padding: 2rem 2rem;
  }  
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  margin-right: 5px;
  height: 2rem;
  background: #353535;
  @media (max-width: 1500px) {
    /* display: none; */
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  @media (max-width: 1500px) {
    h2 {
      margin: 1rem 0.4rem;
      font-size: 2.5rem;
    }
  }
`;

export default ContactUs;
