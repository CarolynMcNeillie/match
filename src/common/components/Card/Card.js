import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Card.module.scss";

<<<<<<< HEAD
export const Card = ({ name, face, handleCompare, children }) => {
  const [isFaceUp, setFaceUp] = useState(false);

  const handleFlip = e => {
    if (!isFaceUp) {
      setFaceUp(true);
      handleCompare(e.target.getAttribute("data-name"));
=======
export const Card = ({ card, children }) => {
  const [isFaceUp, setIsFaceUp] = useState(false);

  const handleFlip = e => {
    if (!isFaceUp) {
      setIsFaceUp(true);
      console.log(card.name);
>>>>>>> origin/card-flip
      setTimeout(function() {
        setIsFaceUp(false);
      }, 1500);
    }
  };

  const cardClassName = classNames(styles.card, {
    [styles["card--face-up"]]: isFaceUp
  });

  return (
    <article
      className={cardClassName}
      data-name={card.name}
      onClick={handleFlip}
    >
      <span className={styles.card__face}>{children}</span>
    </article>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  isFaceUp: PropTypes.bool
};

Card.defaultProps = {
  isFaceUp: false
};
