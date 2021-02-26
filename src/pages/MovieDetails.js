import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";
import { AnimatePresence , motion} from "framer-motion";
import { pageAnimation } from "./animation";
const MovieDetails = () => {
  const history = useHistory(); // react-router-dom
  //   console.log(history);
  const currentUrl = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [eachMovie, setEachMovie] = useState(null);
  // useEffect
  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === currentUrl
    );
    setEachMovie(currentMovie[0]);
  }, [movies, currentUrl]);

  return (
    <>
      {eachMovie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{eachMovie.title}</h2>
            <img src={eachMovie.mainImg} alt="movieimage" />
          </HeadLine>
          <Awards>
            {eachMovie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={eachMovie.secondaryImg} alt="asshole" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};
const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 70vh;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-between;
`;
const StyledAward = styled.div`
  .line {
    width: 50%;
    height: 0.2rem;
    background: green;
    margin: 1rem 0rem;
  }
  padding: 2rem;
  h3 {
    font-size: 1.6rem;
  }
`;
const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};
export default MovieDetails;
