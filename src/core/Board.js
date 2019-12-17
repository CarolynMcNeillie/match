import React, { useState } from "react";

import { Card, cardFaces } from "common";

import { flipCard } from "common/utils";

import styles from "./Board.module.scss";

export const Board = () => {
  const [shuffledCards, setShuffledCards] = useState(cardFaces());
  const [inputTracker, setInputTracker] = useState([]);

  const handleFlip = (key, card) => {
    if (!card.isFaceUp) {
      const updatedCards = [...shuffledCards];
      updatedCards[key] = flipCard(card);
      setShuffledCards(updatedCards);
      if (inputTracker.length === 0) {
        setInputTracker([
          {
            index: `${key}`,
            name: `${card.name}`
          }
        ]);
      } else {
        if (inputTracker[0].name === card.name) {
          console.log(inputTracker[0].name, card.name, "PAIR");
        } else {
          setTimeout(() => {
            console.log(inputTracker[0].name, card.name, "NOPE");
            updatedCards[inputTracker[0].index] = flipCard(
              updatedCards[inputTracker[0].index]
            );
            updatedCards[key] = flipCard(updatedCards[key]);
            setShuffledCards(updatedCards);
          }, 500);
        }
        setInputTracker([]);
      }
    } else {
      console.log("no way buddy!");
    }
  };

  return (
    <div className={styles.board}>
      {shuffledCards.map((card, i) => (
        <Card
          card={card}
          key={i}
          onClick={() => {
            handleFlip(i, card);
          }}
        >
          {card.face}
        </Card>
      ))}
    </div>
  );
};
