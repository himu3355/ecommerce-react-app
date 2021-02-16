import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import NavigationItem from './NavigationItem/NavigationItem';
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavigationBar = (props) => {
    return (
        
      <Container>
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <NavigationItem link="/home">Home</NavigationItem>
            <Nav.Item>
            <Nav.Link href="/home">home</Nav.Link>
            </Nav.Item>
            
            <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        
      </Container>
    );
}

export default NavigationBar;