import React from "react";

import styles from "./Card.module.scss";

export const Card = ({ name, face, children }) => {
  return <article className={styles.card}>{children}</article>;
};
