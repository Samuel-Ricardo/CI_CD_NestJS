import mongoose from 'mongoose';
import { Tweet, TweetSchema } from './tweet.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

describe('[ENTITY] | Tweets', () => {
  describe('[ENTITY] | Tweets (Unit Test)', () => {
    it('Should Create a Tweet', () => {
      const tweet = new Tweet({
        content: 'Hello World',
        screen_name: 'Luiz Carlos',
      });

      expect(tweet.content).toBe('Hello World');
      expect(tweet.screen_name).toBe('Luiz Carlos');
    });
  });

  describe('[ENTITY] | Tweets (Integration Test)', () => {
    let conn: mongoose.Mongoose;

    jest.setTimeout(30000);

    beforeEach(async () => {
      // const app: TestingModule = await Test.createTestingModule({
      //   imports: [
      //     ConfigModule.forRoot({envFilePath: '.env.test'}),
      //     MongooseModule.forRoot(process.env.MONGO_ENTITY_TEST)
      //   ]
      // }).compile();

      // conn = await app.get();

      conn = await mongoose.connect(
        `mongodb://root:root@localhost:27017/tweets_entity_test?authSource=admin`,
      );
    });

    afterEach(async () => {
      await conn.connection.close();
    });

    it('Should Create a Tweet', async () => {
      const TweetModel = conn.model('Tweet', TweetSchema);
      const tweet = new TweetModel({
        content: 'Hello World',
        screen_name: 'Luiz Carlos',
      });

      await tweet.save();

      const tweetCreated = await TweetModel.findById(tweet._id);

      expect(tweetCreated.content).toBe('Hello World');
      expect(tweetCreated.screen_name).toBe('Luiz Carlos');
    });
  });
});
