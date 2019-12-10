import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

export const Card = ({ name, face, children }) => {
  return (
    <article className={styles.card} data-name={name}>
      {children}
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  face: PropTypes.string.isRequired,
  faceUp: PropTypes.bool
};

Card.defaultProps = {
  faceUp: false
};
