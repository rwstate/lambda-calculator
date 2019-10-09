import React from "react";

const NumberButton = (props) => {
  if (props.numbers === "0") {
    return (    
    <button 
    onClick={() => {
      if (props.inputValue.length === 10) {
        return null
      } else if (props.inputValue === "0"){ 
        props.sendNumber(props.numbers)
      } else {
        props.sendNumber(props.inputValue + props.numbers)
      }
    }}
    className="number-button zero-button">
    {props.numbers}
  </button>)
  }
  return (
    <button 
    onClick={() => {
      if (props.inputValue.length === 10) {
        return null
      } else if (props.inputValue === "0"){ 
        props.sendNumber(props.numbers)
      } else {
        props.sendNumber(props.inputValue + props.numbers)
      }
    
    }}
    className="number-button"
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.numbers}
    </button>
  );
};

export default NumberButton;