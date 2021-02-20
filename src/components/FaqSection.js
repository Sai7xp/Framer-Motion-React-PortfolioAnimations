import React from "react";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>Which question goes here?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="question">
        <h4>How Everyting is happening ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="question">
        <h4>And another question goes here ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="question">
        <h4>When can i visit the office ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
