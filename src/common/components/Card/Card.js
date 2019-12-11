import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Card.module.scss";

export const Card = ({ name, face, children }) => {
  const [isFaceUp, setFaceUp] = useState(false);

  const handleFlip = e => {
    if (!isFaceUp) {
      setFaceUp(true);
      console.log(e.target.getAttribute("data-name"));
      setTimeout(function() {
        setFaceUp(false);
      }, 1500);
    }
  };

  const cardClassName = classNames(styles.card, {
    [styles["card--faceUp"]]: isFaceUp
  });

  return (
    <article className={cardClassName} data-name={name} onClick={handleFlip}>
      <span className={styles.card__face}>{children}</span>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  faceUp: PropTypes.bool
};

Card.defaultProps = {
  faceUp: false
};
