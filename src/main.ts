import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('AT-API')
    .setDescription('API for AT')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  Logger.log(`🚀 API service running on: ${await app.getUrl()}`);
  Logger.log(`📚 API Swagger running on: ${await app.getUrl()}/docs`);
}
bootstrap();
