import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`/api/products/${id}`); // Replace with actual API call
            const data = await res.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    const addToCart = () => {
        // Implement cart logic (use localStorage or state management like Redux)
        console.log('Product added to cart', product);
    };

    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductPage;
