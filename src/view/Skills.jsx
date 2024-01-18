import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Main from "../layout/Main";
function Skills() {
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
  ];
  const skills_two = [
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
    {
      title: "Hoppscotch",
      link: "https://docs.hoppscotch.io/",
      img: "https://mintlify.s3-us-west-1.amazonaws.com/hoppscotch/logo/light.svg",
    },
    {
      title: "Jira",
      link: "https://www.atlassian.com/",
      img: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
    },
    {
      title: "Wordpress",
      link: "https://wordpress.com/",
      img: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg",
    },
    {
      title: "Tailwind",
      link: "https://tailwindcss.com/",
      img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      title: "Sass",
      link: "https://sass-lang.com/",
      img: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg",
    },
  ];
  return (
    <>
      <Main>
        <Container>
          <Row className="my-3">
            {skills.map((skill, index) => (
              <Col key={index} className="m-2 skills ">
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    height="70"
                    width="70"
                  />
                </a>
              </Col>
            ))}
          </Row>
          <Row className="my-3">
            {skills_two.map((skill, index) => (
              <Col key={index} className="m-2 skills">
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    height="70"
                    width="70"
                  />
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </Main>
    </>
  );
}

export default Skills;
