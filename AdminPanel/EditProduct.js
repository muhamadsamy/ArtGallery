import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    Name: '',
    Description: '',
    Price: '',
    Stock: '',
    Category: '',
    Status: '',
    Image: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setProduct(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch product details');
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'Image') {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      await axios.put(`/api/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Product updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update product');
    }
  };

  return (
    <Container>
      <h1 className="mb-4">Edit Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            value={product.Name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="Description"
            value={product.Description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            name="Price"
            value={product.Price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formStock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="Stock"
            value={product.Stock}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="Category"
            value={product.Category}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            name="Status"
            value={product.Status}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="Image"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
    </Container>
  );
  
};

export default EditProduct;
