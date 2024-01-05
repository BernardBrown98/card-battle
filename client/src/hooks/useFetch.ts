import { useState, useEffect } from 'react';
type randomDeck = {
  title: string;
  attack: number;
  health: number;
};

type Data = {
  randomDeck: randomDeck[];
};
export const useFetch = (url: string) => {
  const [data, setData] = useState<Data>({ randomDeck: [{ attack: 0, health: 0, title: '' }] });

  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setData(data));
  }, [url]);
  return { data: data.randomDeck };
};
