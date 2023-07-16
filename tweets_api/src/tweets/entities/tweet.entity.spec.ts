import { Tweet } from './tweet.entity';

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
});
