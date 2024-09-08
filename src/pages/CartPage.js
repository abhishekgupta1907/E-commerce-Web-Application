import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-page-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartPage;
