import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../Styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout, motion } from "framer-motion";
import { fade, lineAnim } from "../pages/animation";
import { useScroll } from "./useScrollHOOK";
const FaqSection = () => {
  // const [toggle, setToggle] = useState(false);

  const [element, controls] = useScroll();
  return (
    <Faq ref={element} variants={fade} animate={controls} initial="hidden">
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Which question goes here">
          <motion.div variants={fade} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </motion.div>
        </Toggle>
        <Toggle title="How Everything is happening">
          <motion.div variants={fade} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </motion.div>
        </Toggle>
        <Toggle title="And another question goes here">
          <motion.div variants={fade} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </motion.div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    cursor: pointer;
    padding: 3rem 0rem;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
