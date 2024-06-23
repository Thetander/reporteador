import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JWT_SECRET, SERVER_PORT } from './config/constants';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>(SERVER_PORT),10)|| 3000;

  const secret = config.get<string>(JWT_SECRET);
  logger.log(secret);
  initSwagger(app);

  await app.listen(port);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

}
bootstrap();
