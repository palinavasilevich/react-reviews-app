import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import reviews from "./data";

const App = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const { image, name, job, text } = reviews[currentReviewIndex];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }

    if (number < 0) {
      return reviews.length - 1;
    }

    return number;
  };

  const nextReview = () => {
    setCurrentReviewIndex((currentIndex) => {
      const newReviewIndex = currentIndex + 1;
      return checkNumber(newReviewIndex);
    });
  };

  const prevReview = () => {
    setCurrentReviewIndex((currentIndex) => {
      const newReviewIndex = currentIndex - 1;
      return checkNumber(newReviewIndex);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === currentReviewIndex) {
      randomNumber = currentReviewIndex + 1;
    }

    setCurrentReviewIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className="review">
        <div>
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <h5 className="job">{job}</h5>
          <p className="info">{text}</p>
        </div>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomReview}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
