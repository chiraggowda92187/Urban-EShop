import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem p-3">
      
      <img src={productImage} className="rounded-3xl" />
      <div className="description px-8 font-extralight text-slate-300 text-lg">
        <p>
          <b>{productName}</b>
        </p>
        <div className="flex py-3">
          Price : Rs. <div className="pl-1 text-yellow-400">{price}</div>
        </div>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="text-slate-900 rounded-lg bg-slate-300 opacity-75 mx-3"
          />
          <button onClick={() => addToCart(id)} > + </button>
        </div>
      </div>
      
    </div>
  );
};
