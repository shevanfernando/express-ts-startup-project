/**
 * @created 06/10/2021 - 11:20
 * @project express-ts-startup-project
 * @author  Shevan
 * @file    router
 */

import { Router } from 'express';
import pingController from '@api/ping-controller';
import config from '@src/config';

const router: Router = Router();

router.use(`${config.API_PREFIX}/ping`, pingController);

export default router;
