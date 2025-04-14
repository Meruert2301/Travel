import React, { useState } from 'react';
import './Reviews.css';

function Reviews() {
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [reviewsList, setReviewsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !review) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    const newReview = { email, review };
    setReviewsList((prevReviews) => [...prevReviews, newReview]);

    setEmail('');
    setReview('');

    alert('Спасибо за ваш отзыв!');
  };

  return (
    <div id="reviews" className="reviews-section">
      <div className="review-form-container">
        <h3>Оставить отзыв</h3>
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="review">Ваш отзыв:</label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Ваш отзыв"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Отправить
          </button>
        </form>
      </div>

      <div className="reviews-list-container">
        <h3>Отзывы</h3>
        {reviewsList.length > 0 ? (
          <ul className="reviews-list">
            {reviewsList.map((item, index) => (
              <li key={index} className="review-item">
                <p>
                  <strong>{item.email}</strong>
                </p>
                <p>{item.review}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Пока нет отзывов. Будьте первым!</p>
        )}
      </div>
    </div>
  );
}

export default Reviews;
