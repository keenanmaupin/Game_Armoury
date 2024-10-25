import express from 'express';
import type { Request, Response } from 'express';
import { Users } from '../../models/index.js';


const router = express.Router();

//  GET api/users - Get all users
router.get('/', async (_req: Request, res: Response) => {
  try {
    const userData = await Users.findAll();
  res.json(userData);
  } catch (error: any) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET api/users/:id - Get users by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userData = await Users.findByPk(id);
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({ error: 'User not found'});
    }
  } catch (error: any) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

// POST api/users - Create new users
router.post('/', async (req: Request, res: Response) => {
  const { userName, password, email, gamingEra } = req.body;
  try {
    const newUser = await Users.create({
      userName,
      password,
      email,
      gamingEra,
    });
    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: 'Unable to create new user'});
  }
});

// PUT IS CURRENTLY ON HOLD!!!

// PUT api/users/:id - Update users by ID
// router.put('/:id', async (req: Request, res: Response) => {
//   const works = await Users.findByPk(req.params.id);
//   if(works) {
//   await works.update(req.body);
//   res.json(works);
//   }
//   // TODO: Update code to update already existing work by passing values of name, status, description, assignedVolunteerId.
// });

// DELETE api/users/:id - Delete users by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found'});
    }
  } catch (error: any) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

export { router as usersRouter };
