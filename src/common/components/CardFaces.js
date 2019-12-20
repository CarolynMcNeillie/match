import {
  shuffleArray,
  doubleArray
} from "common/utils";

const cardSet = [{
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
    // },
    // {
    //   name: "heart",
    //   face: "❤️",
    //   isFaceUp: false
    // }, {
    //   name: "family",
    //   face: "👨‍👩‍👧‍👦",
    //   isFaceUp: false
    // },
    // {
    //   name: "comuter",
    //   face: "🖥",
    //   isFaceUp: false
    // }, {
    //   name: "taco",
    //   face: "🌮",
    //   isFaceUp: false
    // },
    // {
    //   name: "train",
    //   face: "🚃",
    //   isFaceUp: false
    // }, {
    //   name: "bus",
    //   face: "🚌",
    //   isFaceUp: false
    // }, {
    //   name: "apple",
    //   face: "🍎",
    //   isFaceUp: false
    // }, {
    //   name: "flower",
    //   face: "🌸",
    //   isFaceUp: false
    // }, {
    //   name: "airplane",
    //   face: "✈️",
    //   isFaceUp: false
    // }, {
    //   name: "present",
    //   face: "🎁",
    //   isFaceUp: false
    // }, {
    //   name: "bear",
    //   face: "🐻",
    //   isFaceUp: false
    // }, {
    //   name: "baby",
    //   face: "👶🏼",
    //   isFaceUp: false
  }
];

export const cardFaces = () => shuffleArray(doubleArray(cardSet));
