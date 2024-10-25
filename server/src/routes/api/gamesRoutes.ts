import express from 'express';
import type { Request, Response } from 'express';
import { Games } from '../../models/index.js';
require('dotenv').config();

const router = express.Router();

// GET /games - Get all games
router.get('/', async (_req: Request, res: Response) => {
  const { query } = req.body;

  try {
    const apiResponse = await fetch(`https://api.rawg.io/api/games/${query}?key=${import.meta.env.VITE_RAWG_API_KEY}`);
  }

});
// GET /games/:id - Get a game by ID
router.get('/:id', async (req: Request, res: Response) => {
  const games = await Games.findByPk(req.params.id);
  res.json(games);

});
// POST /games - Create a new games
//! ON HOLD FOR TIME BEING

// router.post('/', async (req: Request, res: Response) => {
//   const games = await Games.create(req.body);
//   res.json(games);

// });

// PUT /games/:id - Update  games by ID
//! ON HOLD FOR TIME BEING

// router.put('/:id', async (req: Request, res: Response) => {
//   const games = await Games.findByPk(req.params.id);
//   if(games) {
//     await games.update(req.body);
//     res.json(games);
//     }
  
// });


// DELETE /games/:id - Delete  games by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const games = await Games.findByPk(req.params.id);
  if(games) {
    await games.destroy();
    res.json(games);
  }

});

export { router as gamesRouter };
