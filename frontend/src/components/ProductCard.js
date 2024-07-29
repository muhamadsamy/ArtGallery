import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from "react-icons/hi2";

const ProductCard = ({ product }) => {
 
  return (
    <div className=""  style={{height:410 }}>
      <img src={product.Image} className="card-img-top"  style={{height:300 }} alt={product.Name} />
      <div className="card-body">
        <h5 className="card-title" >{product.Name}</h5>
        <p className="card-text fw-semibold fs-6 mb-0" >Price: ${product.Price}</p>
        <Link to={`/product/${product._id}`} className=" text-decoration-none" style={{color:'#8b8983'}}>
        View Details <HiArrowLongRight /></Link>
       
      </div>
    </div>
  );
};

export default ProductCard;
