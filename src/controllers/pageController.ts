import { Request, Response } from 'express';

const home = (req: Request, res: Response) => {
  res.render('pages/index');
};

const dogs = (req: Request, res: Response) => {
  res.render('pages/dogs');
};

const cats = (req: Request, res: Response) => {
  res.render('pages/cats');
};

const fishes = (req: Request, res: Response) => {
  res.render('pages/fishes');
};

export { home, dogs, cats, fishes };
