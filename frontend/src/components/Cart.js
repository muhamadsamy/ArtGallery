import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { postOrders } from "../api";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [cust , setCust]= useState({});


  useEffect(() => {
    const fetchUser = async () => {
      const customerString = localStorage.getItem('customer');
      if (customerString) {
        try {
          const customer = JSON.parse(customerString);
          setCust(customer);
        } catch (error) {
          console.error('Error parsing customer data from local storage', error);
        }
      }
    };

    fetchUser();

  }, []);

  const emptyCart = () => {
    dispatch({ type: 'EMPTY_CART' });
  };

  const increaseQuantity = (_id) => {
    dispatch({ type: "INCREASE_QUANTITY", _id });
  };

  const decreaseQuantity = (_id) => {
    dispatch({ type: "DECREASE_QUANTITY", _id });
  };

  const removeItem = (_id) => {
    dispatch({ type: "REMOVE_FROM_CART", _id });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.Price * item.quantity,0
  );
  const handleCheckout = async () => {
    const customerName = cust.name;
    const customerEmail = cust.email; 
    const customerPhone = cust.phone; 
    const customerAddress = cust.address;

    const orderItems = cart.map(item => ({
      productName: item.Name,
      productPrice: item.Price,
      productQuantity: item.quantity,
      productSubtotal: item.Price * item.quantity
    }));

    const orderTotal = totalPrice;

    try {
      await postOrders({
        customerName,
        customerEmail,
        customerPhone,
        customerAddress,
        orderItems,
        orderTotal
      });
      emptyCart();
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };


  if (cart.length === 0) {
    return (
      <div className="text-center py-3 ">
        <img
          src={require("../assets/emptyCart.png")}
          alt="empty cart "
          className="img-fluid"
        ></img>
        <h2>Empty Cart</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="my-4">Shopping Cart</h1>
      <div className="row">
        {cart.map((item) => (
          <div key={item._id} className="col-md-12 mb-4">
            <CartItem
              item={item}
              increaseQuantity={() => increaseQuantity(item._id)}
              decreaseQuantity={() => decreaseQuantity(item._id)}
              removeItem={() => removeItem(item._id)}
            />
          </div>
        ))}
        <div className=" d-flex flex-row justify-content-between mb-4 ">
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <button className="btn btn-dark px-4 text-uppercase "
          onClick={handleCheckout}
          >Check Out</button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
