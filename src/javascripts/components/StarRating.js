import React from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

export default function StarRating(props) {
  const movieRating = props.movieRating;
  const Star = ({ selected = false }) => (
    <FaStar color={selected ? "maroon" : "grey"} />
  );
  return (
    <>
      {createArray(5).map((n, i) => (
        <Star
          key={i}
          selected={i < Math.floor(movieRating / 2) ? true : false}
        />
      ))}
    </>
  );
}
