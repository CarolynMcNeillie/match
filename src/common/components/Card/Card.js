import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Card.module.scss";

export const Card = ({ card, onClick, background, children }) => {
  const cardClassName = classNames(styles.card, {
    [styles["card--face-up"]]: card.isFaceUp
  });

  return (
    <article className={cardClassName} onClick={onClick}>
      <span className={styles.card__face}> {card.face} </span>{" "}
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
