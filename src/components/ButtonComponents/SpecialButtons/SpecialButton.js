import React from "react";

const SpecialButton = (props) => {
  return (
    <button onClick={() => {
      if (props.specialName === "C") {
        props.sendCurrent("0")
        props.sendInput("0")
      }

      if(props.specialName === "+/-") {
        props.sendInput(eval("-1*" + props.inputValue).toString())
      }

      else {
        let result = eval(props.currentValue + " * (" + props.inputValue + "/100)");
        if (result.toString().length > 10) {
          props.sendInput(
            result.toExponential(4).toString()
          )
        } else {
          props.sendInput(result.toString())
        }
      }
    }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.specialName}
    </button>
  );
};

export default SpecialButton;