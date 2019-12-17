export const flipCard = (card, bool) => {
  const newCard = {
    ...card,
    // isFaceUp: !card.isFaceUp
    isFaceUp: bool
  };
  return newCard;
};
