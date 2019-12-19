export const flipCard = (card, isFaceUp = !card.isFaceUp) => {
  const newCard = {
    ...card,
    isFaceUp
  };
  return newCard;
};
