import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/admin/products', {
                    headers: {
                        'x-auth-token': localStorage.getItem('token')
                    }
                });
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    // Function to handle product deletion
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/admin/products/${id}`, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            // Remove the deleted product from the state
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Manage Products</h1>
            <Link to="/admin/products/create">Create New Product</Link>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name}
                        <Link to={`/admin/products/edit/${product._id}`}>Edit</Link>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageProducts;
