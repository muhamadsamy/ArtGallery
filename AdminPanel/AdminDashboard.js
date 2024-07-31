import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="/admin/products">Manage Products</Link></li>
                    <li><Link to="/admin/orders">Manage Orders</Link></li>
                    <li><Link to="/admin/customers">Manage Customers</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
