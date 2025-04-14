import { Request, Response } from 'express';
import { listPets } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

const search = (req: Request, res: Response) => {
  const { value } = req.query;
  const list = listPets.getFromName(value as string);
  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
  });
};

export { search };
