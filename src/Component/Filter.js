import React, { useState } from "react";
import Rate from "./Rate";
import { useSelector, useDispatch } from "react-redux";
import { setTitle } from "../Redux/action/movieAction";

const Filter = () => {
  const rating = useSelector((state) => state.movieReducer.rating);

  const title = useSelector((state) => state.movieReducer.title);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  return (
    <div
      style={{
        width: 800,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <input
        style={{ width: "100%", padding: "1rem", color: "blue" }}
        type="text"
        value={title}
        onChange={handleChange}
      />
      <Rate rating={rating} />
    </div>
  );
};
export default Filter;
