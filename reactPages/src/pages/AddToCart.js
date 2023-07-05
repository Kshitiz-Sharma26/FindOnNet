import React, { useState,useEffect } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
const ProductList = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [products,setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  // const products = [
  //   {
  //     title: 'OnePlus 6',
  //     price: 69999,
  //     image: 'https://m.media-amazon.com/images/I/81-btS1UL3L._SL1500_.jpg',
  //   },
  //   {
  //     title: 'Grey Backpack',
  //     price: 2000,
  //     image: 'https://m.media-amazon.com/images/I/41iXrVaOPcL._AC_SR400,600_.jpg',
  //   },
  //   {
  //     title: 'Noise Pulse 2',
  //     price: 5000,
  //     image: 'https://m.media-amazon.com/images/I/61SSVxTSs3L._AC_UL400_.jpg',
  //   },
  //   {
  //     title: 'Men Formal Shoes',
  //     price: 2000,
  //     image: 'https://m.media-amazon.com/images/I/31b5TpeKIVL._AC_SR400,600_.jpg',
  //   },
  //   {
  //     title: 'Puma-Men Track Pants',
  //     price: 4999,
  //     image: 'https://m.media-amazon.com/images/I/31O4nAWWyzL._AC_SR400,600_.jpg',
  //   },
  //   {
  //     title: 'Wallet For Men',
  //     price: 599,
  //     image: 'https://images-eu.ssl-images-amazon.com/images/I/91za0xSj48L._AC_UL450_SR450,320_.jpg',
  //   },
  // ];

  const addToCart = (index) => {
    const selectedProduct = products[index];
    setCart([...cart, selectedProduct]);
  };
  const Back = ()=>{
    navigate('/categorySelection');
  }
  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <style>
        {`
          * {
            font-size:small;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .containerproduct {
            display: flex;
            width:80vw;
            gap: 17px;
            margin: 2% auto;
          }

          

          .products {
            width:100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, auto));
            gap: 2rem;
          }
          .row img {
            width: 100%;
            height: auto;
            margin: auto;
            max-width: 250px;
            transition: all 0.40s;
          }

          .row img:hover {
            transform: scale(0.9);
          }

          .price h4 {
            color: #111;
            font-size: 16px;
            text-transform: capitalize;
            font-weight: 300;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .price p {
            color: #151515;
            font-size: 14px;
            font-weight: 700;
          }

          .fa-solid {
            color: #ff9800;
          }

          .head {
            background-color: #ff9800;
            border-radius: 3px;
            height: 40px;
            padding: 10px;
            margin-bottom: 20px;
            color: white;
            font-size: larger;
            text-align: left;
          }

          .sidebar {
            min-width: 40%;
            border-radius: 5px;
            background-color: rgba(106, 118, 140, 0.381);
            padding: 15px;
          }

          .foot {
            display: flex;
            justify-content: space-between;
            margin: 20px 0px;
            padding: 10px 0px;
            border-top: 1px solid #fb0606;
          }

          button {
            width: 100%;
            position: relative;
            border: none;
            border-radius: 5px;
            background-color: #84b6fc;
            padding: 7px 25px;
            cursor: pointer;
            color: white;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }

          .cart-item {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            padding: 10px;
            background-color: white;
            border-bottom: 1px solid #aaa;
            border-radius: 5px;
            margin: 10px;
          }

          .fa-trash:hover {
            cursor: pointer;
            color: #333;
          }
        `}
      </style>
      <div className="containerproduct">
        <div className="sidebar">
            <button style={{backgroundColor:"#ff9800",marginBottom:"10px"}} onClick={Back}>Back to Products</button>
          <div className="head">
            <p>My Cart</p>
          </div>
          
            {cart.length === 0 ? 'Your cart is empty' : null}
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.title}</p>
                <h2>Rs. {item.price*80}</h2>
                <i className="fa-solid fa-trash" onClick={() => removeItem(index)}></i>
              </div>
            ))}
          
          <div className="foot">
            <h3>Total</h3>
            <h2 id="total">Rs. {getTotalPrice()*80}</h2>
          </div>
          <div>Items : <span id="count">{cart.length}</span></div>
        </div>
          <div className="products">
            {products.map((product, index) => (
              <div key={index} className="row">
                <NavLink to="/productDescription" state= {{
      name:product.title,
      amount: product.price * 80,
      description: product.description,
      imge: product.image 
  }}><img src={product.image} alt="" height="300px" /></NavLink>
                <div className="price">
                  <h4>{product.title}</h4>
                  <p>Rs. {product.price*80}</p>
                  <button onClick={() => addToCart(index)}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ProductList;
