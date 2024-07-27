

import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import './productDetails.css'; 

const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return product ? (
        <Row className="justify-content-center mt-4">
            <Col md={8} lg={6}>
                <Card className="product-card">
                    <Row className="product-details">
                        <Col md={6}>
                            <Card.Img variant="top" src={product.image} className="product-image" />
                        </Col>
                        <Col md={6}>
                            <Card.Body>
                                <Card.Title className="product-title">{product.name}</Card.Title>
                                <Card.Text className="product-description">{product.description}</Card.Text>
                                <Card.Text className="product-category">Category: {product.category}</Card.Text>
                                <Card.Text className="product-price">Price: ${product.price}</Card.Text>
                                <Card.Text className="product-stock">Stock: {product.stock}</Card.Text>
                                <Card.Text className={`product-status ${product.status === 'available' ? 'available' : 'unavailable'}`}>
                                    Status: {product.status}
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    ) : null;
};

export default ProductDetails;
