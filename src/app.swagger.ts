import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('REEPOSTEADOR')
    .setDescription(
      'CRUD RESPOSTEADOR',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};
