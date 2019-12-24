import React, { useState } from "react";

import { Alert, Button, Card } from "common";

import { getShuffledCards } from "common/utils";

import styles from "./Board.module.scss";

export const Board = () => {
  const [shuffledCards, setShuffledCards] = useState(getShuffledCards());
  const [inputTracker, setInputTracker] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isComparing, setIsComparing] = useState(false);

  const totalPairs = shuffledCards.length / 2;

  const dealCards = () => {
    setShuffledCards(getShuffledCards());
    setInputTracker([]);
    setTurnCounter(0);
    setMatchCounter(0);
    setIsWinner(false);
    setIsComparing(false);
  };

  const compareCards = compareArray => {
    const firstCard = shuffledCards[compareArray[0]].name;
    const secondCard = shuffledCards[compareArray[1]].name;

    if (firstCard === secondCard) {
      if (totalPairs === matchCounter + 1) {
        setIsWinner(true);
      }
      setMatchCounter(matchCounter + 1);
      setIsComparing(false);
    } else {
      setTimeout(() => {
        const updatedFlippedCards = [...flippedCards];
        compareArray.forEach(cardIndex => {
          const index = updatedFlippedCards.indexOf(cardIndex);

          if (index > -1) {
            updatedFlippedCards.splice(index, 1);
          }
        });
        setFlippedCards(updatedFlippedCards);
        setIsComparing(false);
      }, 1000);
    }
  };

  const handleFlip = (key, card) => {
    if (!flippedCards.includes(key) && !isComparing) {
      const updatedFlippedCards = [...flippedCards];
      const updatedTracker = [...inputTracker];
      updatedFlippedCards.push(key);
      setFlippedCards(updatedFlippedCards);
      if (inputTracker[turnCounter] === undefined) {
        updatedTracker[turnCounter] = [key];
      } else {
        setIsComparing(true);
        updatedTracker[turnCounter][1] = key;
        setTurnCounter(turnCounter + 1);
        compareCards(updatedTracker[turnCounter]);
      }
      setInputTracker(updatedTracker);
    }
  };

  return (
    <div className={styles.board}>
      <Alert isVisible={isWinner}>
        <h1>Winner!</h1>
        <p>
          It took you <strong>{turnCounter}</strong> tries to find{" "}
          <strong>{matchCounter}</strong> pairs
        </p>
        <Button onClick={dealCards}>Play again!</Button>
      </Alert>
      {!isWinner ? (
        <div className={styles["board__cards--container"]}>
          {shuffledCards.map((card, cardIndex) => {
            return (
              <Card
                card={{
                  ...card,
                  isFaceUp: flippedCards.includes(cardIndex)
                }}
                key={cardIndex}
                isFaceUp={flippedCards.includes(cardIndex)}
                onClick={() => {
                  handleFlip(cardIndex, card);
                }}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
