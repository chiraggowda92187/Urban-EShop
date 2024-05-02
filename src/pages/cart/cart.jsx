import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../product";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart mb-12">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="flex justify-center ">
            <div className="flex">
              <h3 className=""> Subtotal: Rs. </h3>
              <div className="pl-1 text-yellow-400">
                <h3>{totalAmount}</h3>
              </div>
            </div>
          </div>

          <div className="flex">
            <button className=" text-base size-24"  onClick={() => navigate('/')}>
              Continue Shopping
            </button>
            <button
              onClick={() => {
                checkout();
                navigate('/checkout');
              }}
            >
              {' '}
              Checkout{' '}
            </button>
          </div>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty!!</h1>
      )}
    </div>
  );
};
