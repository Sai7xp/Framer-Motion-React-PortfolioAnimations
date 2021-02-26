import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/" style={{ fontFamily: "Akaya Kanadaka, cursive" }}>
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  background: #121212;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
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
    padding-left: 10rem;
    position: relative;
  }
`;
export default NavBar;
