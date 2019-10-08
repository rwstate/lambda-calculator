import React from "react";

const NumberButton = (props) => {
  if (props.numbers === "0") {
    return (    
    <button className="number-button zero-button">
    {props.numbers}
  </button>)
  }
  return (
    <button className="number-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.numbers}
    </button>
  );
};

export default NumberButton;