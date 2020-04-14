import { createLogger, format, transports } from 'winston';

const { json, combine, simple, colorize } = format;

const logger = createLogger({
  level: 'info',
  format: json(),
  transports: [
    new transports.File({ filename: 'combined.log' }),
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(colorize({ level: true }), simple()),
    }),
  );
}

export default logger;
