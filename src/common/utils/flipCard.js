export const flipCard = card => {
  const newCard = {
    ...card,
    isFaceUp: !card.isFaceUp
  };
  return newCard;
};
