import mongoose from 'mongoose';
import logger from './logging';

export default async function () {
  try {
    const connect = await mongoose.connect(
      'mongodb://localhost:27017/anime-api',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    if (connect) {
      logger.info('database on...');
    }
  } catch (err) {
    logger.error('Connection failed', err);
  }
}
