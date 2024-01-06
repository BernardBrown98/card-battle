import { CARD_NAMES, MAX_CARD_ATTACK, MAX_CARD_HEALTH, MIN_CARD_ATTACK, MIN_CARD_HEALTH } from './constants';
import { generateRandomNumber } from './generateRandomNumber';

export type Card = {
  title: string;
  attack: number;
  health: number;
};

export const generateRandomCard: () => Card = () => ({
  title: CARD_NAMES[generateRandomNumber(CARD_NAMES.length - 1)],
  attack: generateRandomNumber(MAX_CARD_ATTACK, MIN_CARD_ATTACK),
  health: generateRandomNumber(MAX_CARD_HEALTH, MIN_CARD_HEALTH),
});
