import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { generateRandomDigit } from './utilities';

const app: Express = express();
const port = 3000;

let corsOptions = {
  origin: ['http://localhost:5173'],
};

app.use(cors(corsOptions));

app.get('/test', (req: Request, res: Response) => {
  console.log('ENDPOINT IS REACHED');
  res.send({ msg: 'This is the beginning of the card battle' });
});

app.get('/hostGame', (req: Request, res: Response) => {
  const randomPin = `${generateRandomDigit()}${generateRandomDigit()}${generateRandomDigit()}${generateRandomDigit()}`;
  console.log(`API generated ${randomPin}`);
  res.send({ pin: randomPin });
});

app.get('/joinGame/:pin', (req: Request, res: Response) => {
  const pin = req.params.pin;
  console.log(`UI sent ${pin}`);
  res.send({});
});

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
