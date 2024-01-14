export type Card = {
  title: string;
  attack: number;
  health: number;
};
export type Deck = Card[];
export type GameData = {
  pin: string;
  randomDeck: Deck;
};
