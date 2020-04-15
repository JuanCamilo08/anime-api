import express from 'express';
import morgan from 'morgan';
import db from './db';
import Anime from '../components/Anime';
import error from '../middlewares/error';

db();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(Anime);
app.use(error);

export default app;
