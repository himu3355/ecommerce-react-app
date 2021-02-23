import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Product from './Product/Product';

const Products = props =>  {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(responce => {
            const posts = responce.data.slice(0, 3);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    imageUrl: "https://picsum.photos/180/100"
                }
            });
            setPosts(updatedPosts);
        });
    }, [posts]);

    return (
        <Container>
            <Row>
                {
                    posts.map(post => {
                        return <Product 
                            key={post.id} 
                            favourite={false} 
                            productName={post.title} 
                            productDesc={post.body} 
                            image={post.imageUrl} 
                        />;
                    })
                }
            </Row>
        </Container>
    );
};

export default Products;