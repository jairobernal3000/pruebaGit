import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const port = 3000;
  
  initSwagger(app);

  await app.listen(port);
  logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();