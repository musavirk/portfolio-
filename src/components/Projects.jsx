import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
function Projects() {
  return (
    <>
      <MyNavbar />
      <Container>
        {" "}
        <Row>
          <h2>PROJECTS</h2>
          <Col className="education m-1">
            <h3>Betasquirrel - CRM</h3>
            <p>
              Developed a CRM system using Express.js and React.js for optimized
              customer relationship management. Implemented features including
              real-time updates, task management, and dynamic reporting. <br />
              <b>Technologies Used:</b> Node.js, Express.js, React.js, MongoDB,
              Swagger UI, JOI, DotEnv, Prettier, and Jira
            </p>
          </Col>
          <Col className="education m-1">
            <h3> ICares24 </h3>
            <p>
              ICares24 is an initiative focused on charity, authenticity,
              relief, empathy, and service. iCares Developed using WordPress,
              emphasizing user-friendly navigation and a visually appealing
              layout. Implemented responsive design principles to ensure
              accessibility across various devices <br />
              <b>
                Link: <a href="http://icares24.com">icares24.com</a>
              </b>
              <br />
              <b>Technologies Used:</b> WordPress, PHP, HTML, Bootstrap,
              JavaScript, Prettier, and Jira.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="education m-1">
            <h3>One SCHOOL </h3>
            <p>
              School Management Software Designed and implemented a School
              Management Software using modern technologies and frameworks.
              Successfully delivered a robust solution, significantly improving
              overall school operations. <br />
              <b>Technologies Used: </b> Vue.js, Bootstrap, Laravel, MySQL,
              Hoppscotch.
            </p>
          </Col>
          <Col className="education m-1">
            <h3> WEATHER FORECAST</h3>
            <p>
              Weather App Developed a React web application for weather
              forecasting using the OpenWeather API. Provides comprehensive
              weather data for the current time and predictions for upcoming
              hours and days.
              <br />
              <b>Technologies Used:</b> React.js, OpenWeather API, Prettier,
              Postman.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="education m-1">
            <h3>MOVIE APP</h3>
            <p>
              Movie Searching and Listing Created a responsive React web
              application for movie searching and listing. Utilized the TMDB API
              for data retrieval and incorporated features like search, sorting,
              and showcasing top-rated movies. <br />
              <b>Technologies Used:</b> React.js, React Bootstrap, TMDB API,
              Axios, Hoppscotch.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
