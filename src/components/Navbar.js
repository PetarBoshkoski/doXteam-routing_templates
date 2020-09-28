import React from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Link to="/">Home</Link>
          <Link to="/templates">Templates</Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Navbar;
