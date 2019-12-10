import React from "react";

import { Accordion, Button } from "common/components";

export class HelloWorldClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind;
  }

  handleClick = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <Button onClick={this.handleClick}> Class Increment {counter} </Button>{" "}
        <p> Hello World Class</p>{" "}
        <Accordion title="Accordion">
          Click the accordion header to hide the accordion content{" "}
        </Accordion>{" "}
      </>
    );
  }
}
