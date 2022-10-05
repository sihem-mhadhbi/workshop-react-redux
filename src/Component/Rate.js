import React from "react";
import { useDispatch } from "react-redux";
import { setRating } from "../Redux/action/movieAction";

const Rate = ({ rating }) => {
  const dispatch = useDispatch();
  const stars = (x) => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span
            style={{ color: "blue" }}
            key={i}
            onClick={() => dispatch(setRating(i))}
          >
            &#9733;
          </span>
        );
      } else {
        starArray.push(
          <span
            style={{ color: "blue" }}
            key={i}
            onClick={() => dispatch(setRating(i))}
          >
            &#9734;
          </span>
        );
      }
    }
    return starArray;
  };
  return <div>{stars(rating)}</div>;
};

export default Rate;
