import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Somboon Maneematcha </span>front-end web developer
            from <span className="purple"> Bangkok, Thailand.</span>
            <br />
            <br />
            I am actively <span className="purple">pursuing</span> a Junior Frontend Web Developer position to leverage my existing knowledge and further enhance my frontend skills.
            <br />
            <br />
            Before I pick up coding, I am freelance translator but my intestesting pick me up with&nbsp; 
            <a 
              href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
              className="purple"
            >
            CS50x course
            </a> which teach me about computer science, after a while I apply for Junior Software Developement camp cohort 5 <span className="purple">(JSD5)</span> that keep leading me until I'm here.
            <br />
            <br />
            Apart from coding, I trust that I fairly have invest i <span className="purple">soft skill</span> which I trust developer should have to work with other
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Detail Orientation
            </li>
            <li className="about-activity">
              <ImPointRight /> Growth Mindset 
            </li>
            <li className="about-activity">
              <ImPointRight /> Persistance
            </li>
            <li className="about-activity">
              <ImPointRight /> Time-management
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
