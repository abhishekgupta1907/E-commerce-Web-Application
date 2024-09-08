import React from "react";
import "./CheckoutPage.css";

const CheckoutPage = () => {
    return (
        <div className="checkout-page-container">
            <h2>Checkout</h2>
            {/* Add checkout form here */}
            <form className="checkout-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Shipping Address" required />
                <button type="submit" className="btn">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;
