import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import ResponsiveNavItems from "./responsiveNavItems";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const { pathname } = useLocation();
  const [menuToggle, setmenuToggle] = useState(false);
  return (
    <StyledNav>
      <h1>
        <Link
          to="/"
          style={{ fontFamily: "CodyStar, cursive", fontSize: "1.6rem" }}
        >
          STARLINK
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "55%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "55%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "55%" : "0%" }}
          />
        </li>
      </ul>
      <FaReact
        onClick={() => {
          setmenuToggle(!menuToggle);
          // console.log(menuToggle);
        }}
        style={{ cursor: "pointer" }}
        className="menu"
        color="#13d887"
        size="30px"
      />
      <ResponsiveNavItems
        menuToggle={menuToggle}
        setmenuToggle={setmenuToggle}
      />
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  width: 100%;
  display: flex;
  background: #121212;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  position: sticky;
  top: 0;
  z-index: 16;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  li {
    padding-left: 3.4rem;
    position: relative;
  }
  .menu {
    display: none;
  }
  @media (max-width: 650px) {
    /* text-align: center;
    padding: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content:center;
    display: none; */
    ul {
      display: none;
    }
    .menu {
      display: flex;
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.2rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -45%;
  left: 40%;
`;
export default NavBar;
