import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import siteLogo from "../../Assets/whole.png";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="bg-transparent"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={siteLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <InputGroup className="mb-3 rounded-pill">
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-transparent border-end-0 rounded-end rounded-pill"
                >
                  @
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search for your favorite groups in ATG"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                  className="border-start-0 rounded-start rounded-pill bg-transparent"
                />
              </InputGroup>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                Create account,<span className="text-primary"> It's free!</span>
              </Nav.Link>
              <NavDropdown eventKey={2} href="#memes"></NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
