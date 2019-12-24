import React, { useState } from "react";

import { Alert, Button, Card } from "common";

import { getShuffledCards, setPlayer } from "common/utils";

import styles from "./Board.module.scss";

export const Board = ({ player }) => {
  const [shuffledCards, setShuffledCards] = useState(getShuffledCards(6));
  const [inputTracker, setInputTracker] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);
  const [winCounter, setWinCounter] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isComparing, setIsComparing] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const totalPairs = shuffledCards.length / 2;

  const dealCards = () => {
    setShuffledCards(getShuffledCards(6));
    setInputTracker([]);
    setTurnCounter(0);
    setMatchCounter(0);
    setFlippedCards([]);
    setIsWinner(false);
    setIsComparing(false);
  };

  if (player) {
    setPlayer(player.theme);
  }

  const compareCards = compareArray => {
    const firstCard = shuffledCards[compareArray[0]].name;
    const secondCard = shuffledCards[compareArray[1]].name;

    if (firstCard === secondCard) {
      if (totalPairs === matchCounter + 1) {
        setWinCounter(winCounter + 1);
        setIsWinner(true);
        setIsComparing(false);
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
        <h1> {player ? `Go ${player.name}!` : `winner!`} </h1>{" "}
        <p>
          You won <strong> {winCounter} </strong>{" "}
          {winCounter === 1 ? `time` : `times`}!
        </p>{" "}
        <p>
          This time it took you <strong> {turnCounter} </strong> tries to find{" "}
          <strong> {matchCounter} </strong> pairs{" "}
        </p>{" "}
        <Button onClick={dealCards}> Play again! </Button>{" "}
      </Alert>{" "}
      {!isWinner ? (
        <div className={styles["board__cards--container"]}>
          {" "}
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
          })}{" "}
        </div>
      ) : null}{" "}
    </div>
  );
};
