import React from 'react';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-3 mx-5" >
          <img src={item.Image} alt={item.Name}  style={{height:250 , width:300}} />
        </div>
        <div className="col-md-5 col-sm-8 ms-5" >
          <div className="card-body">
            <h5 className="card-title">{item.Name}</h5>
            <p className="card-text">${item.Price}</p>
            <p className="card-text">Quantity: {item.quantity}</p>
            <div className="btn-group" role="group" aria-label="Quantity Control">
              <button type="button" className="btn btn-dark" onClick={decreaseQuantity}>-</button>
              <button type="button" className="btn btn-success" onClick={increaseQuantity}>+</button>
            </div>
            <button className="btn btn-danger ms-3 " onClick={removeItem}>Remove</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
