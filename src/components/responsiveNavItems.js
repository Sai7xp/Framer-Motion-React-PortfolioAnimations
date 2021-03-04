import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { titleAnim2 } from "./animation";
import { motion } from "framer-motion";
function ResponsiveNavItems({ menuToggle, setmenuToggle }) {
  return menuToggle ? (
    <Items variants={titleAnim2} initial="hidden" animate="show">
      <Link
        onClick={() => {
          setmenuToggle(false);
          // console.log(menuToggle);
        }}
        className="colo"
        to="/"
      >
        1. About Us
      </Link>
      <Link
        onClick={() => {
          setmenuToggle(!true);
          // console.log(menuToggle);
        }}
        className="colo"
        to="/work"
      >
        2. Our Work
      </Link>
      <Link
        onClick={() => {
          setmenuToggle(!true);
          // console.log(menuToggle);
        }}
        className="colo"
        to="/contact"
      >
        3. Contact Us
      </Link>
    </Items>
  ) : (
    " "
  );
}
const Items = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  /* padding: 0rem 2rem; */
  /* background: black; */
  margin-top: 15vh;
  .colo {
    color: #139967;
    font-size:1rem;
  }
  @media (min-width: 651px) {
    display: none;
  }
`;
export default ResponsiveNavItems;
