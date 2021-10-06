/**
 * @created 06/10/2021 - 12:53
 * @project express-ts-startup-project
 * @author  Shevan
 * @file    ping-controller
 */

import { Request, Response, NextFunction, Router } from 'express';

const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Pong!' });
  } catch (e) {
    next(e);
  }
});

export default router;
