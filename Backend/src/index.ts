import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
const express = require('express');
const cors = require('cors');
const app = express();
import baseRouter from './routes';
import bodyParser from 'body-parser';
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(express.urlencoded({ extended: true }));

const port = 4000;

app.use(baseRouter);
app.listen(port, async () => {
  await prisma.$connect();
  console.log(`🚀 Server ready at: http://localhost:4000`);
});
