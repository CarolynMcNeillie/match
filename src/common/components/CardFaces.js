import { shuffleArray, doubleArray } from "common/utils";

const cardSet = [
  {
    name: "tongue",
    face: "😛",
    isFaceUp: false
  },
  {
    name: "nerd",
    face: "🤓",
    isFaceUp: false
  },
  {
    name: "grimace",
    face: "😬",
    isFaceUp: false
  },
  {
    name: "agony",
    face: "😩",
    isFaceUp: false
  }
];

export const cardFaces = () => shuffleArray(doubleArray(cardSet));
