import React from "react";
import ProductList from "../components/ProductList";
import "./ProductPage.css";

const ProductPage = () => {
    return (
        <div className="product-page-container">
            <h2>Our Products</h2>
            <ProductList />
        </div>
    );
};

export default ProductPage;
