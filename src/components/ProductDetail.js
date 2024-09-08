import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../utils/ProductData";
import "./ProductDetail.css";

const ProductDetail = () => {
    const { id } = useParams();
    const product = ProductData.find((p) => p.id === parseInt(id));

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <button className="btn">Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
