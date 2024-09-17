import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from 'Header';
import Home from 'Home';
import ProductPage from 'ProductPage';
import Cart from 'Cart';
import Footer from 'Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
