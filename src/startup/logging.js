import { createLogger, format, transports } from 'winston';

const { json, combine, simple, colorize } = format;
const { File, Console } = transports;

const logger = createLogger({
  level: 'info',
  format: json(),
  transports: [
    new File({ filename: 'combined.log' }),
    new File({ filename: 'error.log', level: 'error' }),
  ],
  exceptionHandlers: [new File({ filename: 'exceptions.log' })],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new Console({
      format: combine(colorize({ level: true }), simple()),
    }),
  );
}

export default logger;
