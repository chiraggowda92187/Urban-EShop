import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="w-screen">
      <div className="flex justify-between px-32">
        <button
          className="text-lg border-2 rounded-xl px-6"
          onClick={() => {
            navigate('/');
          }}
        >
          Urban EShop
        </button>
        <div className="flex">
          <Link to="/" className="text-xl px-9">
            {' '}
            Shop{' '}
          </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};
