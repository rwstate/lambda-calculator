import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => {
        if (props.operatorValue === "="){
          let result = eval(props.currentValue + props.currentOperator + props.inputValue);
          if (result.toString().length > 10) {
            props.sendInput(
              result.toExponential(4).toString()
            )
          } else {
            props.sendInput(result.toString())
          }
        } else {
            props.sendOperator(props.operatorValue)
            props.sendCurrent(props.inputValue)
            props.sendInput("0")
        }
    }}
      
      >{props.operatorValue}</button>
    </>
  );
};

export default OperatorButton;
