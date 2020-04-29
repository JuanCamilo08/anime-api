import express from 'express';
import morgan from 'morgan';
import db from './db';
import Anime from '../components/Anime';
import Genre from '../components/Genre';
import error from '../middlewares/error';

db();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api', Anime);
app.use('/api', Genre);
app.use(error);

export default app;
