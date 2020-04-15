import express from 'express';
import morgan from 'morgan';
import db from './db';
import Anime from '../components/Anime';

db();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(Anime);

export default app;
