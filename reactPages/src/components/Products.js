import React, { useEffect, useState } from 'react';
import "../components/Product.css"
function Products() {
    const [products, setProducts] = useState([]);
    const categories = ["men's clothing",'jewelery',"electronics","women's clothing"]
    const [selectedCategory, setSelectedCategory] = useState('All');
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    const filteredProducts = (selectedCategory === 'All')
    ? products
    : products.filter((product) => product.category === selectedCategory);
    return (
      <div id='ProductSection'>
        <h1>Product List</h1>
        <div className="category-buttons">
        <button
          onClick={() => handleCategoryChange('All')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
        <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
           <img src={product.image} alt={product.title} />
              <div className="product-details">
                <h4>{product.title}</h4>
                <p className="price">Rs.{product.price*82}</p>
              </div>
          </div>
        ))} 
        </div>
      </div>
    );
}  

export default Products;
