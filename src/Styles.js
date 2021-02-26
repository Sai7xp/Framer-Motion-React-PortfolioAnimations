import styled from "styled-components";
import { motion } from "framer-motion";
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ease 0.3s;
  color: white;
  padding: 4.2rem 4.4rem;
`;
export const Description = styled.div`
  flex: 1;
  z-index: 2;
  transition: all ease 0.3s;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  transition: all ease 0.3s;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
