import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Model } from 'mongoose';
import { Tweet, TweetDocument } from './entities/tweet.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet.name)
    private tweetModel: Model<TweetDocument>,
  ) {}

  async create(createTweetDto: CreateTweetDto) {
    const tweet = new this.tweetModel(createTweetDto);
    await tweet.save();
    return tweet;
  }

  findAll() {
    return this.tweetModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
