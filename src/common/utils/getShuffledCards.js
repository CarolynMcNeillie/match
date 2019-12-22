import {
  shuffleArray,
  doubleArray
} from "common/utils";

const cardSet = [{
    name: "tongue",
    face: "😛"
  },
  {
    name: "nerd",
    face: "🤓"
  },
  {
    name: "grimace",
    face: "😬"
  },
  {
    name: "agony",
    face: "😩"
  },
  {
    name: "heart",
    face: "❤️"
  },
  {
    name: "family",
    face: "👨‍👩‍👧‍👦"
  },
  {
    name: "comuter",
    face: "🖥"
  },
  {
    name: "taco",
    face: "🌮"
  },
  {
    name: "train",
    face: "🚃"
  },
  {
    name: "bus",
    face: "🚌"
  },
  {
    name: "apple",
    face: "🍎"
  },
  {
    name: "flower",
    face: "🌸"
  },
  {
    name: "airplane",
    face: "✈️"
  },
  {
    name: "present",
    face: "🎁"
  },
  {
    name: "bear",
    face: "🐻"
  },
  {
    name: "baby",
    face: "👶🏼"
  }
];

export const getShuffledCards = (numberOfCards = 5) =>
  shuffleArray(doubleArray(shuffleArray(cardSet).slice(0, numberOfCards)));
