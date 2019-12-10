import React from "react";
import PropTypes from "prop-types";

export const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// You can do this to pass a bunch of properties
// export const Button = ({ children, ...rest }) => {
//   return <button {...rest}>{children}</button>;
// };

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};
