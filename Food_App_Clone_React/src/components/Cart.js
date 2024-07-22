import React from "react";
import MenuList from "./MenuList";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearItem());
    }

    return (
      <div className="m-4 p-4 text-center ">
        <h1 className="font-bold text-2xl text-green-600">Cart Items</h1>

        <div className="w-6/12 m-auto">
            <MenuList items={cartItems} />
        </div>

        <div className="w-6/12 m-auto flex justify-center">
            
            {cartItems.length > 0 && (
                <button 
                className="px-5 py-1 m-[20vh] font-bold bg-red-600 text-white rounded-lg" 
                onClick={handleClearCart}>
                Clear Cart
                </button>
            )}
  
            {cartItems.length === 0 && 
                <p 
                className="px-5 py-1 m-[20vh] text-xl font-bold text-red-600">
                Your cart is empty!!! Go back to menu...
                </p>}
        </div>

      </div>

    )
};

export default Cart;