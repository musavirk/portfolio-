import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./MyNavbar";

function About() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row className="my-3">
          <Col className="profile-pic my-3">
            <img
              src="https://avatars.githubusercontent.com/u/121387892?v=4"
              alt="profile_pic"
            />
          </Col>
          <Col lg={8} className="education">
            <h1>Hi 👋, I am MUSAVIR K</h1>
            <h3>A passionate full stack developer from India</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              dolorem perferendis incidunt est soluta? Quo earum voluptates
              quis, nostrum distinctio, adipisci quas laudantium a nobis totam
              blanditiis atque molestiae libero.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
