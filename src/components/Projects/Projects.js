import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import colmar from "../../Assets/Projects/project-colmar.png";
import findHat from "../../Assets/Projects/project-findhat.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colmar}
              isBlog={false}
              title="Colmar Academy"
              description="Capstone project for Codeacademy, prove that learner can make static website with html and CSS"
              ghLink="https://github.com/somboon-mnmc/colmar-project"
              demoLink="https://colmar-31-jsd5.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
