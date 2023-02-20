import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('API for NestJS application')
  .setVersion('1.0')
  .build();
