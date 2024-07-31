import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const CreateProduct = () => {
  const [product, setProduct] = useState({
    Name: '',
    Description: '',
    Price: '',
    Stock: '',
    Category: '',
    Status: '',
    Image: null,
  });

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
      await axios.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Product created successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to create product');
    }
  };

  return (
    <Container>
      <h1 className="mb-4">Create New Product</h1>
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
          Create Product
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProduct;
