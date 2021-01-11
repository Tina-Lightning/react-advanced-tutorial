import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // you cannot use hooks inside a conditional
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello world");
  }, []);

  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
