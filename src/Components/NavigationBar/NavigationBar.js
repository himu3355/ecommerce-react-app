import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container, NavDropdown} from 'react-bootstrap';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationBar = (props) => {
    return (
        
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavigationItem link="/home">Home</NavigationItem>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <NavDropdown inline="true" title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Satting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Login</NavDropdown.Item>
                <NavDropdown.Item href="#">Register</NavDropdown.Item>
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
}

export default NavigationBar;