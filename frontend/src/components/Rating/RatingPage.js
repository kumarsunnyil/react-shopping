import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

function Rating({ rating, onClick, style }) {
  console.log(rating);
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
          
        </span>;
      })}
    </div>
  );
}

export default Rating;
