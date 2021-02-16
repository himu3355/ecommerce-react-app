import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = (props) => {
    return (
        
        <Nav.Item>
          <Nav.Link href={props.link}>{props.children}</Nav.Link>
        </Nav.Item>
        
    );
};

export default NavigationBar;
