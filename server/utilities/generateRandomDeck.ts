import { generateRandomDigit } from './generateRandomDigit';

type Card = {
  title: string;
  attack: number;
  health: number;
};

type Deck = Card[];

const cardNames = ['Tiger', 'Eagle', 'Gator', 'Turtle', 'Bear', 'Owl'];

export const randomDeck: Deck = [
  {
    title: cardNames[Math.floor(Math.random() * cardNames.length)],
    attack: generateRandomDigit(15),
    health: generateRandomDigit(15),
  },
  {
    title: cardNames[Math.floor(Math.random() * cardNames.length)],
    attack: generateRandomDigit(15),
    health: generateRandomDigit(15),
  },
];
