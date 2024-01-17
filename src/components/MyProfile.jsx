import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./MyNavbar";

function MyProfile() {
  const skills = [
    {
      title: "HTML5",
      link: "https://www.w3.org/html/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "Css3",
      link: "https://www.w3schools.com/css/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      title: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "php",
      link: "https://www.php.net",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    },
    {
      name: "bootstrap",
      link: "https://getbootstrap.com",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    },
    {
      name: "vue.js",
      link: "https://vuejs.org/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    },
    {
      name: "react.js",
      link: "https://reactjs.org/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },

    {
      title: "Laravel",
      link: "https://laravel.com/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
    },
    {
      name: "node.js",
      link: "https://nodejs.org",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "mysql",
      link: "https://www.mysql.com/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
  ];
  const skills_two = [
    {
      name: "mongodb",
      link: "https://www.mongodb.com/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      title: "Express.js",
      link: "https://expressjs.com",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      name: "postman",
      link: "https://postman.com",
      img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      title: "Linux",
      link: "https://www.linux.org/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    },
    {
      name: "AWS",
      link: "https://aws.amazon.com",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      title: "Git",
      link: "https://git-scm.com/",
      img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      title: "Figma",
      link: "https://www.figma.com/",
      img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },

    {
      title: "Electron",
      link: "https://www.electronjs.org",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
    },
    {
      title: "Cypress",
      link: "https://www.cypress.io",
      img: "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
    },
  ];
  return (
    <>
      <MyNavbar />
      <Container>
        <Row className="my-3">
          <Col className="profile-pic">
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
        <Row className="my-3">
          <h2>SKILLS</h2>
          {skills.map((skill, index) => (
            <Col key={index} className="m-2">
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img src={skill.img} alt={skill.name} height="70" width="70" />
              </a>
            </Col>
          ))}
        </Row>
        <Row className="my-3">
          {skills_two.map((skill, index) => (
            <Col key={index} className="m-3">
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img src={skill.img} alt={skill.name} height="70" width="70" />
              </a>
            </Col>
          ))}
        </Row>
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

export default MyProfile;
