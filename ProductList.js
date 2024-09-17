import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product._id} className="product-card">
                    <Link to={`/product/${product._id}`}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
