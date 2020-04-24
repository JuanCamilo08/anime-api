import mongoose from 'mongoose';
import logger from './logging';

export default async function () {
  try {
    await mongoose.connect('mongodb://localhost:27017/anime-api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    logger.info('database on...');
  } catch (err) {
    logger.error('Connection failed', err);
  }
}
