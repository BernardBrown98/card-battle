import express, { Express, Request, Response } from 'express';
import cors from 'cors';

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

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
