import React from 'react';

import classes from './Product.module.css';

// get our fontawesome imports
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardOptions from '../../UI/CardOptions/CardOptions';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Product = (props) => {
    return (
        <Col lg={4}>
            <Card className="mb-5">
                <CardOptions><FontAwesomeIcon icon={props.favourite ? faHeart : farHeart} /></CardOptions>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.productName}</Card.Title>
                    <Card.Text>
                        {props.productDesc}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;