import {
  shuffleArray,
  doubleArray
} from "common/utils";

const cardSet = [{
    name: "popo",
    face: "🚓"
  },
  {
    name: "taxi",
    face: "🚕"
  },
  {
    name: "racecar",
    face: "🏎"
  },
  {
    name: "tractor",
    face: "🚜"
  },
  {
    name: "firetruck",
    face: "🚒"
  },
  {
    name: "danger",
    face: "⚠️"
  },
  {
    name: "comuter",
    face: "🚗"
  },
  {
    name: "moto",
    face: "🏍"
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
    name: "rocket",
    face: "🚀"
  },
  {
    name: "train",
    face: "🚂"
  },
  {
    name: "airplane",
    face: "✈️"
  },
  {
    name: "warning",
    face: "☢️"
  },
  {
    name: "construction",
    face: "🚧"
  },
  {
    name: "copter",
    face: "🚁"
  },
  {
    name: "vespa",
    face: "🛵"
  }
];

export const getShuffledCards = (numberOfCards = 5) =>
  shuffleArray(doubleArray(shuffleArray(cardSet).slice(0, numberOfCards)));
