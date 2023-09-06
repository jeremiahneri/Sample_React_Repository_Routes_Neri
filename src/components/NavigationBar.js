import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="bg-warning">
        <Navbar.Brand className="text-light" href="#home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contactus">Contact Us</Link>
            </Nav.Link>
            <NavDropdown title="Hooks" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/classState">
                   Class State
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/functionalUseState">
                  Functional Use State
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/basicformHandling">
                  Basic Form Handling
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
