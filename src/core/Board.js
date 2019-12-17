import React, { useState } from "react";

import { Card, cardFaces } from "common";

import { flipCard } from "common/utils";

import styles from "./Board.module.scss";

export const Board = () => {
  const [shuffledCards, setShuffledCards] = useState(cardFaces());
  const [inputTracker, setInputTracker] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);

  const compareCards = compareArray => {
    const firstCard = shuffledCards[compareArray[0]].name;
    const secondCard = shuffledCards[compareArray[1]].name;
    console.log(firstCard, secondCard);

    if (firstCard === secondCard) {
      setMatchCounter(matchCounter + 1);
    } else {
      setTimeout(() => {
        const newUpdatedCards = [...shuffledCards];
        compareArray.forEach(cardIndex => {
          newUpdatedCards[cardIndex] = flipCard(
            newUpdatedCards[cardIndex],
            false
          );
        });
        setShuffledCards(newUpdatedCards);
      }, 1000);
    }
  };

  const handleFlip = (key, card) => {
    if (!card.isFaceUp) {
      const updatedCards = [...shuffledCards];
      const updatedTracker = [...inputTracker];
      updatedCards[key] = flipCard(card, true);
      setShuffledCards(updatedCards);
      if (inputTracker[turnCounter] === undefined) {
        updatedTracker[turnCounter] = [key];
      } else {
        updatedTracker[turnCounter][1] = key;
        setTurnCounter(turnCounter + 1);
        compareCards(updatedTracker[turnCounter]);
      }
      setInputTracker(updatedTracker);
    }
  };

  return (
    <>
      <p>
        Tries: {turnCounter}, Matches: {matchCounter}
      </p>
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
    </>
  );
};
