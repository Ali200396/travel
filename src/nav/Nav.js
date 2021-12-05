import { Component, Fragment } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class Naav extends Component {
  render() {
    return (
      <Fragment key={Math.random()}>
        <Navbar className="navbar navbar-expand-lg navbar-light" expand="md">
          <div className="container">
            <Navbar.Brand href="#home">
              <span>Travel</span>
              <span>center</span>
            </Navbar.Brand>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/login">
                  Log in <i className="fas fa-user "></i>{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </Navbar>
        <div className=" container">
          <div className="navo ">
            <NavLink className="" exact to="/">
              <span>Flights</span>
            </NavLink>
            <NavLink className="" to="/Hotel">
              <span>Hotels</span>
            </NavLink>
            <NavLink className="" to="/Car">
              <span>Cars</span>
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Naav;
