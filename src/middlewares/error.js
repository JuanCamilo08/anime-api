import logger from '../startup/logging';

export default (err, req, res) => {
  if (err) {
    logger.error('Internal server error', err);
    return res.status(500).json('Internal server error');
  }

  res.status(404).json('Bad gateway');
};
