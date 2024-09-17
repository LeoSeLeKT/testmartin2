import React, { useState, useEffect } from 'react';
import ProductList from 'ProductList';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from backend or static data
        const fetchProducts = async () => {
            const res = await fetch('/api/products'); // Replace with actual API call
            const data = await res.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Our Products</h1>
            <ProductList products={products} />
        </div>
    );
};

export default Home;
