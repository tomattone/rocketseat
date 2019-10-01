import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import path from 'path';

import Youch from 'youch';

import * as Sentry from '@sentry/node';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    Sentry.init({
      dsn: 'https://998ac0068008494d9dc458bff2ad8240@sentry.io/1766397',
    });

    this.server.use(Sentry.Handlers.requestHandler());

    this.middlewares();
    this.routes();
    this.exceptionHandler();

    this.server.use(Sentry.Handlers.errorHandler());
  }

  middlewares() {
    this.server.use(express.json());

    // rota estatica p/ exibir arquivos
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Erro interno' });
    });
  }
}

export default new App().server;
