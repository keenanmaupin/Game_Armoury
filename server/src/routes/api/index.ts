import { Router } from 'express';
import { gamesRouter } from './gamesRoutes.js';
import { usersRouter } from './usersRoutes.js';


const router = Router();

router.use('/games', gamesRouter);
router.use('/users', usersRouter);

export default router;
