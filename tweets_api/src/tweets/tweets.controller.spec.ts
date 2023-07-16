import { Test, TestingModule } from '@nestjs/testing';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';
import { Tweet, TweetSchema } from './entities/tweet.entity';
import { MongooseModule } from '@nestjs/mongoose';

describe('TweetsController', () => {
  let controller: TweetsController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          'mongodb://root:root@localhost:27017/tweets_controller_test?authSource=admin',
        ),
        MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }]),
      ],
      controllers: [TweetsController],
      providers: [TweetsService],
    }).compile();

    controller = module.get<TweetsController>(TweetsController);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
