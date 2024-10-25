import { Router } from 'express';
import { gamesRouter } from './gamesRoutes.js';
import { usersRouter } from './usersRoutes.js';


const router = Router();

// import { gamesRouter } from './games.js';
// import { usersRouter } from './users.js';

router.use('/games', gamesRouter);
router.use('/users', usersRouter);

export default router;
