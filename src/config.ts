import { registerAs } from '@nestjs/config';

export const config = registerAs('config', () => ({
  environment: process.env.ENVIRONMENT,
  service: process.env.SERVICE,
  version: process.env.VERSION,
  httpPort: parseInt(process.env.HTTP_PORT, 10) || 3000,
  mySql: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
}));
