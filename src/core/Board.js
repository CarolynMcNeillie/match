import React from "react";

import { Card } from "common/components/Card";
import { CardFaces } from "common/components/CardFaces";

export const Board = () => {
  return (
    <>
      {CardFaces.map(card => (
        <Card name="{card.name}">{card.face}</Card>
      ))}
    </>
  );
};
