import { Dropdown } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const MyNavbar = () => {
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
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/service">Services</Dropdown.Item>
              <Dropdown.Item href="/contact">Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Regular navigation links for larger devices */}
        <div className="mx-3 d-none d-md-block">
          <a href="/">Home</a>
        </div>
        <div className="mx-3 d-none d-md-block">
          <a href="/service">Services</a>
        </div>
        <div className="mx-3 d-none d-md-block">
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
