import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import { useState } from 'react';
import "./orderHistory.css";

const OrderHistory = () => {
  const histry = useNavigate();
  const Back = ()=>{
    histry('/');
  }
  const [orders,setorders] = useState([]);
  const callAboutPage = async ()=>{
    try{
      const resp = await fetch("/about",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const d = await resp.json();
      if(!d.fname){
        histry("/");
      }
      else{
        setorders(d.orderHistory);
      }
    }
    catch(err){
      console.log(err);
      histry("/");
    }
  }
  useEffect( () => {
     callAboutPage();
    $('.order-item').each(function(index) {
      $(this).delay(index * 200).slideDown(600);
    });
  }, [orders.length]);

  const handleItemClick = (event) => {
    const placeholder = event.target;
    $(placeholder).hide();
    $(placeholder).prev().show();
  };

  const handleItemNameClick = (event) => {
    const itemName = event.target;
    $(itemName).hide();
    $(itemName).next().show();
  };

  return (
    <div className="container">
      <h2>Order History</h2>
      {(
      <ul className="order-list">
      { orders.map((order) => (
    <li className="order-item">
      <div className="order-header">
        <span className="order-id">Order #{order.orderId}</span>
        <span className="item-ordered">
          <span className="item-name" onClick={handleItemNameClick}>{order.item}(x{order.quantity})</span>
          <span className="item-placeholder" onClick={handleItemClick}>See Item Ordered</span>
        </span>
        <span className="order-status">{order.status}</span>
      </div>
      <div className="order-details">
      <span className="order-date">Date: {new Date(order.orderdate).toLocaleDateString}</span>
        <span className="order-total">Total: Rs {order.totalAmount}</span>
      </div>
    </li>
  ))}
      </ul>
      )}
      <button onClick={Back}>Back to Home</button>
    </div>
  );
};

export default OrderHistory;
