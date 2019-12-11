export const flipCard = card => {
  const newCard = {
    name: card.name,
    face: card.face,
    isFaceUp: !card.isFaceUp
  };
  return newCard;
};
