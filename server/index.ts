import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { HttpStatusCodes, generateRandomDigit } from './utilities';

const app: Express = express();
const port = 3000;

const corsOptions = {
  origin: ['http://localhost:5173'],
};

app.use(cors(corsOptions));

app.get('/test', (req: Request, res: Response) => {
  console.log('ENDPOINT IS REACHED');
  res.json({ msg: 'This is the beginning of the card battle' });
});

app.get('/hostGame', (req: Request, res: Response) => {
  const randomPin = `${generateRandomDigit()}${generateRandomDigit()}${generateRandomDigit()}${generateRandomDigit()}`;
  console.log(`API generated ${randomPin}`);
  res.json({ pin: randomPin });
});

app.get('/joinGame/:pin', (req: Request, res: Response) => {
  const { pin } = req.params;
  console.log(`UI sent ${pin}`);

  const validPinLength = 4;
  if (pin.length !== validPinLength) {
    console.log('Invalid pin length');
    res.status(HttpStatusCodes.BAD_REQUEST).json('Invalid pin length');
    return;
  }

  const numbersOnlyRegex = /^\d+$/;
  const isNumbersOnly = numbersOnlyRegex.test(pin);
  if (!isNumbersOnly) {
    console.log('Invalid pin characters');
    res.status(HttpStatusCodes.BAD_REQUEST).json('Invalid pin characters');
    return;
  }

  res.send({ msg: "You've joined a game!" });
});

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
