import React from 'react';
import { Container } from 'react-bootstrap';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';

import Products from '../../Components/Products/Products';

const Home = props => {
    return (
        <>
        <Container>
            <Jumbotron fluid>
                <h1 className="col-lg-12 col-sm-9 col-sm-offset-1 text-center">E-Commerce Website</h1>
                <p>
                    This is full fiture ecommerce website.
                </p>
                <InputGroup className="col-md-6 offset-md-3 mb-3">
                    <FormControl
                    placeholder="Search Products"
                    aria-label="Search Products"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button id="basic-addon2">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
        </Container>
        <Products />
        </>
    );
}

export default Home;