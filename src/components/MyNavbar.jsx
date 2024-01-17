import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <nav>
      <div className="m-3">
        <a href="/">
          <h1>musavir.io</h1>
        </a>
      </div>
      <div className="d-flex m-3 navigation">
        <div className="mx-3 d-sm-none d-sm-none d-md-block ">
          <a href="/">Home</a>
        </div>
        <div className="mx-3 d-sm-none d-md-block ">
          {" "}
          <a href="/service">Services</a>
        </div>
        <div className="mx-3 d-sm-none d-md-block ">
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
