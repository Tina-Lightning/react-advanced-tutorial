import React, { useState } from "react";
// useState is a function
// use
// component name must be in uppercase (like UseStateBasics)
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("Random title");
  // const [ value, function ] = useState("starter value");

  const handleClick = () => {
    if (text === "Random title") {
      setText("hello world");
    } else {
      setText("Random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
