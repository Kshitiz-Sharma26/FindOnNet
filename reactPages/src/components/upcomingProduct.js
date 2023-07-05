import React, {useState, useEffect} from 'react';
import './upcomingProduct.css'
const UpcomingProduct = ({ name, description, launchDate,imgsrc }) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the countdown string
      const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      setCountdown(countdownString);

      // Clear interval when countdown is complete
      if (distance < 0) {
        clearInterval(intervalId);
        setCountdown('Product launched!');
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={imgsrc} alt="Product" />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Launch Date: {launchDate.toDateString()}</p>
        <p className="countdown">{countdown}</p>
      </div>
    </div>
  );
};

export default UpcomingProduct;
