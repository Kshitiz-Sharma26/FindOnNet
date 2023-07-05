import React, { useState } from 'react';
import './productDescription.css'
import { useLocation,useNavigate } from 'react-router-dom';
function ProductDescription() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name,amount, description, imge } = location.state || {};
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  // const [newReviewInput, setNewReviewInput] = useState('');
  const [reviews, setReviews] = useState([
    { maker: 'Adam:', content: 'Great product!', liked: false, disliked: false },
    { maker: 'Karan Sharma:', content: 'Highly recommended.', liked: false, disliked: false },
    { maker: 'Harsh:', content: 'Excellent quality.', liked: false, disliked: false }
  ]);
  const Back = ()=>{
    navigate('/addtoCart');
  }
  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  // const addReview = () => {
  //   if (newReviewInput.trim() !== '') {
  //     const review = {
  //       maker: 'Kshitiz:',
  //       content: newReviewInput,
  //       liked: false,
  //       disliked: false
  //     };
  //     setReviews([...reviews, review]);
  //     setNewReviewInput('');
  //   }
  // };

  const handleLike = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].liked = !updatedReviews[index].liked;
    updatedReviews[index].disliked = false;
    setReviews(updatedReviews);
  };

  const handleDislike = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].disliked = !updatedReviews[index].disliked;
    updatedReviews[index].liked = false;
    setReviews(updatedReviews);
  };

  return (
    <div className="product-container">
      <div className="product">
          <h3>{name}</h3>
        <img src={imge} alt="Product Image" className="product-image" />
        <div className="product-price">Rs{amount}</div>
        <div className="product-description">
          {descriptionVisible && (
            <p>{description}</p>
          )}
          <button id="toggle-description" onClick={toggleDescription}>Toggle Description</button>
        </div>
        <div className="product-reviews">
          <h2>Customer Reviews</h2>
          <ul className="review-list">
            {reviews.map((review, index) => (
              <li key={index} className="review-item">
                <span className="review-maker">{review.maker}</span> {review.content}
                <div className="review-actions">
                  
                    <button className={`like-button ${review.liked ? 'liked' : ''}`} onClick={() => handleLike(index)}>Like</button>
                  
                    <button className={`dislike-button ${review.disliked ? 'Disliked' : ''}`} onClick={() => handleDislike(index)}>Dislike</button>
                  
                </div>
              </li>
            ))}
          </ul>
          <button onClick={Back}>Back</button>
          {/* <div className="add-review">
            <input
              type="text"
              id="new-review-input"
              placeholder="Enter your review"
              value={newReviewInput}
              onChange={(e) => setNewReviewInput(e.target.value)}
            />
            <button id="add-review" onClick={addReview}>Add Review</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
