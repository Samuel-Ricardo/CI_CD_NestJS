import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docConf = new DocumentBuilder()
    .setTitle('Tweets API')
    .setDescription('Tweets API to study Automated Tests and CI & CD')
    .setVersion('1.0')
    .addTag('tweets')
    .setContact(
      'Samuel Ricardo',
      'https://www.linkedin.com/in/samuel-ricardo/',
      'samuelricardoofficial@gmail.com',
    )
    .setLicense(
      'MIT',
      'https://github.com/Samuel-Ricardo/CI_CD_NestJS/blob/main/LICENSE',
    )
    .build();

  const document = SwaggerModule.createDocument(app, docConf);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
