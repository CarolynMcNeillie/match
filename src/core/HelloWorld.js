import React, { useState } from "react";

import { Accordion, Button } from "common";

const IncrementButton = ({ onIncrement, counter, children }) => (
  <Button onClick={onIncrement}>Increment # {counter}</Button>
);

export const HelloWorld = () => {
  const [counter, setCounter] = useState(0);
  // const [state, setState] = useState('initialValue')

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <>
      <IncrementButton
        onIncrement={handleClick}
        counter={counter}
      ></IncrementButton>
      <p>Hello World</p>
      <Accordion title="Accordion">
        Click the accordion header to hide the accordion content
      </Accordion>
    </>
  );
};
