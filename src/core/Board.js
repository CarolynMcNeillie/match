import React from "react";

import {
  Card,
  cardFaces,
  shuffleArray,
  doubleArray
} from "common";

import styles from "./Board.module.scss";

export const Board = () => {
  const shuffledCards = shuffleArray(doubleArray(cardFaces));

  return ( <
    div className = {
      styles.board
    } > {
      shuffledCards.map((card, i) => ( <
        Card card = {
          card
        }
        key = {
          i
        } > {
          card.face
        } <
        /Card>
      ))
    } <
    /div>
  );
};
