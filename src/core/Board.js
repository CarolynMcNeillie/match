import React from "react";

import { Card } from "common/components";
import { CardFaces } from "common/components/CardFaces";

import styles from "./Board.module.scss";

export const Board = () => {
  const doubleCards = arr => {
    return arr.concat(arr);
  };

  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffle = arr => {
    let currentIndex = arr.length;
    let temporaryValue = 0;
    let randomIndex = 0;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  };

  const randCards = shuffle(doubleCards(CardFaces));

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
