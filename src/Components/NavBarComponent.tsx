import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";


function BasicExample() {
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <NavDropdown title="Jobs" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={'/job1'}>Job 1-Riot Games</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/job2'}>Job 2-Apple</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/job3'}>Job 3-Pokemon Company</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/job4'}>Job 4-MSI</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/job5'}>Job 5-Self Employed</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
