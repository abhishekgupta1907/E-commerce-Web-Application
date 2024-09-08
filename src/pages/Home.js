import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Our E-commerce Store</h1>
            <p>Explore our wide range of products.</p>
            <Link to="/products" className="btn">
                Shop Now
            </Link>
        </div>
    );
};

export default Home;
