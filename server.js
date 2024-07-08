#!/usr/bin/env node

const path = require('path');
const dotenv = require('dotenv');
const { createRequestHandler } = require('@expo/server/adapter/express');

const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');

// Load environment variables from.env file, where API keys and passwords are configured.
if (process.env.NODE_ENV === 'production')
  dotenv.config({ path: path.join(process.cwd(), '.env.production') });
else
  dotenv.config({ path: path.join(process.cwd(), '.env.development') });

const CLIENT_BUILD_DIR = path.join(process.cwd(), 'dist/client');
const SERVER_BUILD_DIR = path.join(process.cwd(), 'dist/server');

const app = express();

app.use(cors());
app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');

process.env.NODE_ENV = 'production';

app.use(
  express.static(CLIENT_BUILD_DIR, {
    maxAge: '1h',
    extensions: ['html'],
  })
);

app.use(morgan('tiny'));

app.all(
  '*',
  createRequestHandler({
    build: SERVER_BUILD_DIR,
  })
);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
