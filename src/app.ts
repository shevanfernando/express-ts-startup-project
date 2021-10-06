/**
 * @created 06/10/2021 - 11:02
 * @project express-ts-startup-project
 * @author  Shevan
 * @file    app
 */

import express, { Application, json, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import router from '@src/router';
import { HttpError } from '@lib/http-error';
import { logger } from '@util/logger';

const app: Application = express();

app.use(json());
app.use(cors({ origin: ['http://localhost:80'], credentials: true }));

app.use(router);

app.use((err: HttpError | SyntaxError | Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.status).send(err.toJSON());
  } else if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).send(err);
  } else {
    logger.error(err);
    res.status(500).send(process.env.NODE_ENV === 'development' ? err : 'Internal Server Error');
  }
});

export default app;
