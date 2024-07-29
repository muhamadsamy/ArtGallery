import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from "react-icons/hi2";
//import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  // const { dispatch } = useCart();

  // const addToCart = (product) => {
  //   dispatch({ type: 'ADD_TO_CART',product });
  // };

  return (
    <div className=""  style={{height:410 }}>
      <img src={product.Image} className="card-img-top"  style={{height:300 }} alt={product.Name} />
      <div className="card-body">
        <h5 className="card-title" >{product.Name}</h5>
        <p className="card-text fw-semibold fs-6 mb-0" >Price: ${product.Price}</p>
        <Link to={`/product/${product._id}`} className=" text-decoration-none" style={{color:'#8b8983'}}>
        View Details <HiArrowLongRight /></Link>
        {/* <button 
         onClick={() => addToCart(product)} 
        className="btn btn-success ml-2 mb-2">Add to Cart</button> */}
      </div>
    </div>
  );
};

export default ProductCard;
