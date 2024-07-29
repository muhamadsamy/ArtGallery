import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import './productDetails.css'; 
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fetchProductById } from '../api';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { dispatch } = useCart();


    useEffect(() => {
        const getProduct = async () => {
            try {
              const response = await fetchProductById(productId);
              setProduct(response.data);
              setLoading(false);
            } catch (err) {
              setError(err);
              setLoading(false);
            }
          };
      
          getProduct();
        }, [productId]);

        const addToCart = () => {
            dispatch({ type: 'ADD_TO_CART',  product });
          };
        
      

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <Row className="justify-content-center py-5 bg-dark m-0 ">
            <Col md={8} lg={6}>
                <Card className="product-card bg-dark ">
                    <Row className="product-details">
                        <Col md={6}>
                            <Card.Img className="product-image" variant="top" style={{maxHeight:650}} src={product.Image}  />
                        </Col>
                        <Col md={6}>
                            <Card.Body>
                                <Card.Title className="product-title">{product.Name}</Card.Title>
                                <Card.Text className="product-description">{product.Description}</Card.Text>
                                <Card.Text className="product-category">Category: {product.Category}</Card.Text>
                                <Card.Text className="product-price">Price: ${product.Price}</Card.Text>
                                <Card.Text className="product-stock">Stock: {product.Stock}</Card.Text>
                                <Card.Text className={`product-status ${product.Status === 'available' ? 'available' : 'unavailable'}`}>
                                    Status: {product.Status}
                                </Card.Text>
                                <Button onClick={addToCart} variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    ) 
};

export default ProductDetails;
