import express from 'express';
import type { Request, Response } from 'express';
import { Users } from '../../models/index.js';


const router = express.Router();

//  GET api/users - Get all users
router.get('/', async (_req: Request, res: Response) => {
  const works = await Users.findAll();
  res.json(works);
  // TODO: Update code to retrieve all Work objects with associated Volunteer
});
// GET api/users/:id - Get users by ID
router.get('/:id', async (req: Request, res: Response) => {
  const works = await Users.findByPk(req.params.id);
  res.json(works);
  // TODO: Update code to retrieve work object with associated Volunteer based on passing ID of Work
});

// POST api/users - Create new users
router.post('/', async (req: Request, res: Response) => {
  const works = await Users.create(req.body);
  res.json(works);
  // TODO: Update code to create new Work based on passing name, status, description, and assignedVolunteerId
});

// PUT api/users/:id - Update users by ID
router.put('/:id', async (req: Request, res: Response) => {
  const works = await Users.findByPk(req.params.id);
  if(works) {
  await works.update(req.body);
  res.json(works);
  }
  // TODO: Update code to update already existing work by passing values of name, status, description, assignedVolunteerId.
});

// DELETE api/users/:id - Delete users by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const works = await Users.findByPk(req.params.id);
  if(works) {
    await works.destroy();
    res.json(works);
  }
  // TODO: Update code to delete work based on passing ID of Work
});

export { router as usersRouter };
