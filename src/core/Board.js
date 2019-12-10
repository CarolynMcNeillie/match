import React from "react";

import { Card } from "common/components";
import { CardFaces } from "common/components/CardFaces";

import styles from "./Board.module.scss";

export const Board = () => {
  return (
    <div syle={styles.board}>
      {CardFaces.map((card, i) => (
        <Card name="{card.name}" key={i}>
          {card.face}
        </Card>
      ))}
    </div>
  );
};
