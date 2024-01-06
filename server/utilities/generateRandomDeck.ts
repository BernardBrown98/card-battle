import { Card, generateRandomCard } from './generateRandomCard';

type Deck = Card[];

export const generateRandomDeck: () => Deck = () => [generateRandomCard(), generateRandomCard()];
