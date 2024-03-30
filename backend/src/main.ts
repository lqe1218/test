import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {writeFileSync} from 'fs';
const yaml = require('yaml');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle(process.env.PROJECT_NAME)
    .setDescription(process.env.PROJECT_DESCRIPTION)
    .setVersion(process.env.PROJECT_VERSION)
    .addSecurityRequirements('x-org')
    .addSecurityRequirements('oauth2')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { showExtensions: true, persistAuthorization: true },
  });

  writeFileSync('./openapi.yaml', yaml.stringify(document));

  await app.listen(process.env.HTTP_PORT ?? 4000);
}
bootstrap();
