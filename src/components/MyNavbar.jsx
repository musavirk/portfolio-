import { Dropdown, Button } from "react-bootstrap";
import { List, Sun, Moon } from "react-bootstrap-icons";

const MyNavbar = () => {
  const toggleMode = () => {
    document.body.classList.toggle("dark-mode");
  };
  return (
    <nav>
      <div className="m-3">
        <a href="/">
          <h1>musavir.io</h1>
        </a>
      </div>
      <div className="d-flex m-3 navigation">
        {/* Dropdown menu for small devices */}
        <div className="mx-3 d-block d-md-none">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              <List />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">About</Dropdown.Item>
              <Dropdown.Item href="/skills">Skills</Dropdown.Item>
              <Dropdown.Item href="/education">Education</Dropdown.Item>
              <Dropdown.Item href="/education">Education</Dropdown.Item>
              <Dropdown.Item href="/projects">Projects</Dropdown.Item>
              <Dropdown.Item href="/contact">Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Regular navigation links for larger devices */}
        <div className="mx-3 d-none d-md-block">
          <a href="/">About</a>
        </div>
        <div className="mx-3 d-none d-md-block">
          <a href="/skills">Skills</a>
        </div>
        <div className="mx-3 d-none d-md-block">
          <a href="/education">Education</a>
        </div>
        <div className="mx-3 d-none d-md-block">
          <a href="/projects">Projects</a>
        </div>
        <div className="mx-3 d-none d-md-block">
          <a href="/service">Services</a>
        </div>
        <div className="mx-3 d-none d-md-block">
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div>
        <Button onClick={toggleMode}>
          <Sun />
        </Button>
      </div>
    </nav>
  );
};

export default MyNavbar;
