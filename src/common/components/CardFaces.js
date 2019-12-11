import {
  shuffleArray,
  doubleArray
} from "common";

const cardSet = [{
    name: 'tongue',
    face: '😛',
    isFaceUp: false
  },
  {
    name: 'nerd',
    face: '🤓',
    isFaceUp: false
  },
  {
    name: 'grimace',
    face: '😬',
    isFaceUp: false
  },
  {
    name: 'agony',
    face: '😩',
    isFaceUp: false
  },
]

export const cardFaces = () => shuffleArray(doubleArray(cardSet))

// {
//   name: 'sweat',
//   face: '😅',
//   isFaceUp: false
// },
// {
//   name: 'kiss',
//   face: '😚',
//   isFaceUp: false
// },
