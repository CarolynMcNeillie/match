import React, { useState } from "react";

import { Card, cardFaces } from "common";

import styles from "./Board.module.scss";

export const Board = () => {
  const [shuffledCards, setShuffledCards] = useState(cardFaces());

  const handleFlip = key => {
    const updatedCards = [...shuffledCards];
    updatedCards[key] = {
      name: `${updatedCards[key].name}`,
      face: `${updatedCards[key].face}`,
      isFaceUp: true
    };
    console.log(updatedCards);
    return setShuffledCards(updatedCards);
  };

  return (
    <div className={styles.board}>
      {shuffledCards.map((card, i) => (
        <Card
          card={card}
          key={i}
          onClick={() => {
            handleFlip(i);
          }}
        >
          {card.face}
        </Card>
      ))}
    </div>
  );
};
