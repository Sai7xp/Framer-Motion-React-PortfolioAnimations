import React from "react";
// import Icons
import clock from "../images/clock.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";
import { About, Description, Hide, Image } from "../Styles";
import styled from "styled-components";
const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          {/* // ? single card */}
          <Card>
            <div className="icon">
              <img src={clock} alt="money icon" />
              <h3>Nihilism</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="money icon" />
              <h3>Unity</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={clock} alt="money icon" />
              <h3>Everyting</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Finance</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="something" />
      </Image>
    </Services>
  );
};
const Services = styled(About)`
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;
const Card = styled.div`
  .icon{
    display:flex;
    align-items:center;
  }
  h3{
    margin-left:1.5rem;
    font-size:2rem;
  }
  
`;
export default ServicesSection;
