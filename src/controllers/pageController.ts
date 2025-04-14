import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { listPets } from '../models/pet';

const home = (req: Request, res: Response) => {
  const list = listPets.getAll();
  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'animais',
      background: 'allanimals.jpg',
    },
    list,
  });
};

const dogs = (req: Request, res: Response) => {
  const list = listPets.getFromType('dog');
  res.render('pages/page', {
    menu: createMenuObject('dogs'),
    banner: {
      title: 'cachorros',
      background: 'banner_dog.jpg',
    },
    list,
  });
};

const cats = (req: Request, res: Response) => {
  const list = listPets.getFromType('cat');
  res.render('pages/page', {
    menu: createMenuObject('cats'),
    banner: {
      title: 'gatos',
      background: 'banner_cat.jpg',
    },
    list,
  });
};

const fishes = (req: Request, res: Response) => {
  const list = listPets.getFromType('fish');
  res.render('pages/page', {
    menu: createMenuObject('fishes'),
    banner: {
      title: 'peixes',
      background: 'banner_fish.jpg',
    },
    list,
  });
};

export { home, dogs, cats, fishes };
