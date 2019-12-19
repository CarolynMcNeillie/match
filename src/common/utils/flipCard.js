export const flipCard = (card, bool = !card.isFaceUp) => {
  const newCard = {
    ...card,
    // isFaceUp: !card.isFaceUp
    isFaceUp: bool
  };
  return newCard;
};
