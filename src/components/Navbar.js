import React from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useHistory } from "react-router-dom";
import '../styles/style.css';
const Navbar = () => {
  //   const history = useHistory();
  // const handleClick = () => {
  //   let name ="petar";
  //   let url = "blabla";
  //   history.push(`/templates/${name}/${url}`)
  // }

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
