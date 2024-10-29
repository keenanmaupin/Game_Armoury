import express from 'express';
import type { Request, Response } from 'express';
import { Games } from '../../models/index.js';
// import fetch from 'node-fetch'; 
import 'dotenv/config';


const router = express.Router();


// router.get('/', async (req: Request, res: Response):Promise<any> => {
//   const { query } = req.query;

//   if (!query) {
//     return res.status(400).json({ error: 'Query parameter is required' });
//   }

//   try {
//     const apiResponse = await fetch(
//       `https://api.rawg.io/api/games/${query}?key=${process.env.VITE_RAWG_API_KEY}`
//     );

//     if (!apiResponse.ok) {
//       return res.status(apiResponse.status).json({ error: 'Failed to fetch games from the API' });
//     }

//     const data = await apiResponse.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching games:', error);
//     res.status(500).json({ error: 'An error occurred while fetching games' });
//   }
// });

router.post('/playlist', async (req: Request, res: Response) => {
  const { id, slug, name, released, background_image, developer, platform, genres, description_raw, userId } = req.body;

  try {
    const newUser = await Games.create({
      id,
      slug,
      name,
      released,
      background_image,
      developer,
      platform,
      genres,
      description_raw,
      userId
    });
    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: 'Unable to create new user'});
  }
});

// GET /games/:id - Get a game by ID from the local database
router.get('/:id', async (req: Request, res: Response):Promise<any>  => {
  try {
    const game = await Games.findByPk(req.params.id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    res.json(game);
  } catch (error) {
    console.error('Error fetching game:', error);
    res.status(500).json({ error: 'An error occurred while fetching the game' });
  }
});

// DELETE /games/:id - Delete a game by ID from the local database
router.delete('/:id', async (req: Request, res: Response):Promise<any>  => {
  try {
    const game = await Games.findByPk(req.params.id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    await game.destroy();
    res.json({ message: 'Game deleted successfully', game });
  } catch (error) {
    console.error('Error deleting game:', error);
    res.status(500).json({ error: 'An error occurred while deleting the game' });
  }
});

export { router as gamesRouter };
