import React from "react";

const BookCard = (props) => {
  return (
    <div>
      <h3>{props.cardTitle}</h3>

      <p>{props.description}</p>
    </div>
  );
};

export default BookCard;
