import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Product from './Product/Product';

const Products = (props) => {
    return (
        <Container>
            <Row>
                <Product
                 favourite={false}
                 productName="Product Name" />
                <Product
                 favourite={false}
                 productName="Product Name" />
                <Product 
                 favourite={false}
                 productName="Product Name" />
                <Product
                 favourite={true}
                 productName="Product Name" />
            </Row>
        </Container>
    );
};

export default Products;