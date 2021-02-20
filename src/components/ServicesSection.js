import React from "react";
// import Icons
import clock from "../images/clock.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";
const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          {/* // ? single card */}
          <div className="card">
            <div className="icon">
              <img src={clock} alt="money icon" />
              <h2>Nihilism</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="money icon" />
              <h2>Unity</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="money icon" />
              <h2>Everyting</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money icon" />
              <h2>Finance</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      {/* // todo : image will go here */}
      <div className="image">
        <img src={home2} />
      </div>
    </div>
  );
};
export default ServicesSection;
