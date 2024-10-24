import { Router } from 'express';
import { gamesRouter } from './games.js';
import { usersRouter } from './users.js';

const router = Router();

router.use('/games', gamesRouter);
router.use('/users', usersRouter);

export default router;
