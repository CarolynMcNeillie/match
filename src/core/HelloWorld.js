import React, { useState } from "react";

import { Accordion, Button } from "common/components";

export const HelloWorld = () => {
  const [counter, setCounter] = useState(0);
  // const [state, setState] = useState('initialValue')

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <>
      <Button onClick={handleClick}>Increment {counter}</Button>
      <p>Hello World</p>
      <Accordion title="Accordion">
        Click the accordion header to hide the accordion content
      </Accordion>
    </>
  );
};
