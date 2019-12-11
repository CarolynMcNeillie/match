import React from "react";

import { Card, cardFaces, shuffleArray, doubleArray } from "common";

import styles from "./Board.module.scss";

export const Board = () => {
  const randCards = shuffleArray(doubleArray(cardFaces));

  return (
    <div className={styles.board}>
      {randCards.map((card, i) => (
        <Card name={card.name} key={i}>
          {card.face}
        </Card>
      ))}
    </div>
  );
};
