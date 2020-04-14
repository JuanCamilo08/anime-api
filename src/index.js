import app from './startup/app';
import logger from './startup/logging';

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`server listening on port ${port}`);
});
