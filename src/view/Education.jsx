import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Main from "../layout/Main";

function Education() {
  return (
    <>
      <Main>
        {" "}
        <Container>
          <Row>
            <h2>EDUCATION</h2>
            <Col className="education m-1">
              <h3>Bachilors Degree</h3>
              <h4>KTU - College of Engineering Adoor</h4>
              <p> Computer Science and Engineering - 2019-2023</p>
            </Col>
            <Col className="education m-1">
              <h3>Plus Two</h3>
              <h4>Gov.HSS Thariode</h4>
              <p>Science- 2016-2018</p>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
}

export default Education;
