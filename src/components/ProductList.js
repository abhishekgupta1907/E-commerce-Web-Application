import React from "react";
import ProductCard from "./ProductCard";
import ProductData from "../utils/ProductData";
import "./ProductList.css";

const ProductList = () => {
    return (
        <div className="product-list">
            {ProductData.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
