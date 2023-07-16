import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        join(__dirname, '..', `.env.${process.env.NODE_ENV}`),
        join(__dirname, '..', `.env`),
      ],
    }),
    MongooseModule.forRoot(process.env.MONGO_DSN),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
