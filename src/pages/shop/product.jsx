import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './product.css';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <div className="">
      <div className="product ">
        <img src={productImage} className="size-72 rounded-3xl" />
        <div className="description">
          <h3 className="pt-3.5">
            <b className="font-extralight text-slate-300 ">{productName}</b>
          </h3>
          <h4 className="py-1 font-extralight text-yellow-400"> Rs. {price}</h4>
        </div>
        <button
          type="button"
          className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 "
          onClick={() => addToCart(id)}
        >
          <svg
            class="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount}) </>}
        </button>
      </div>
    </div>
  );
};
