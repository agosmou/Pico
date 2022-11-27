import React from "react";

const StarRating = ({ rating }) => {
  
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    // ex. rating = 4
    if (i <= rating) { // push full star
        // NOTE: key{i} is not a valid key - this is a brute force error solution
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    // the math.ceiling will raise a decimel number to the next highest integer e.g. 2.3 -> 3
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) { // push half star
      stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star text-warning"></i>);
    }
  }
  return <>{stars}</>;
};

export default StarRating;