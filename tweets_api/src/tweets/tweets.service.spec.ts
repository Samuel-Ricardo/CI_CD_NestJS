import { Test, TestingModule } from '@nestjs/testing';
import { TweetsService } from './tweets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tweet, TweetSchema } from './entities/tweet.entity';

describe('TweetsService', () => {
  let service: TweetsService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          'mongodb://root:root@db_prod:27017/tweets_service_test?authSource=admin',
        ),
        MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }]),
      ],
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
