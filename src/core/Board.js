import React, { useState } from "react";

import { Alert, Button, Card } from "common";

import { flipCard, getShuffledCards } from "common/utils";

import styles from "./Board.module.scss";

export const Board = () => {
  const [shuffledCards, setShuffledCards] = useState(getShuffledCards());
  const [inputTracker, setInputTracker] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);
  const [isWinner, setIsWinner] = useState(false);

  const totalPairs = shuffledCards.length / 2;

  const dealCards = () => {
    setShuffledCards(getShuffledCards());
    setInputTracker([]);
    setTurnCounter(0);
    setMatchCounter(0);
    setIsWinner(false);
  };

  const compareCards = compareArray => {
    const firstCard = shuffledCards[compareArray[0]].name;
    const secondCard = shuffledCards[compareArray[1]].name;

    if (firstCard === secondCard) {
      if (totalPairs === matchCounter + 1) {
        setIsWinner(true);
      }
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
      updatedCards[key] = flipCard(card);
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
    <div className={styles.board}>
      <Alert isVisible={isWinner}>
        <h1>Winner!</h1>
        <p>
          It took you <strong>{turnCounter}</strong> tries to find{" "}
          <strong>{matchCounter}</strong> pairs
        </p>
        <Button onClick={dealCards}>Play again!</Button>
      </Alert>
      <div className={styles["board__cards--container"]}>
        {shuffledCards.map((card, cardIndex) => (
          <Card
            card={card}
            key={cardIndex}
            onClick={() => {
              handleFlip(cardIndex, card);
            }}
          />
        ))}
      </div>
    </div>
  );
};
