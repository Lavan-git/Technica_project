import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const RatingStar = ({ value, onStarClick }) => {
  const handleClick = () => onStarClick(value);

  return (
    <span onClick={handleClick} className={`star ${value <= value}`}>
      &#9733;
    </span>
  );
};

const RatingsAndReviews = ({ initialRating = 0, initialReviews = [] }) => {
  const [rating, setRating] = useState(initialRating);
  const [reviews, setReviews] = useState(initialReviews);

  // Handle star click event
  const handleStarClick = (newRating) => setRating(newRating);

  // Add a new review (replace with your backend logic)
  const addReview = (text) => {
    setReviews([...reviews, { text }]); // Add new review to state
  };

  return (
    <div className="container mt-5">
      <h2>Ratings</h2>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <RatingStar key={value} value={value} onStarClick={handleStarClick} style={{width:"20%"}}/>
        ))}
      </div>
      <span className="average-rating">
        Average Rating: {rating.toFixed(1)}
      </span>

      <h2>Reviews</h2>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((review) => (
        <div key={review.text} className="review">
          <p>{review.text}</p>
        </div>
      ))}

      {/* Add review form */}
      <h2>Add a Review</h2>
      <textarea
        placeholder="Write your review..."
        onChange={(e) => {
          // Handle text area change to store review text
        }}
      />
      <button onClick={() => addReview(/* review text */)}>Submit Review</button>
    </div>
  );
};

export default RatingsAndReviews;
