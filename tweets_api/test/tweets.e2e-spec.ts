import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import request from 'supertest';

describe('[E2E] Tweets', () => {
  let app: INestApplication;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    if (app) await app.close();
  });

  it('[POST] | /tweets', async () => {
    const res = await request(app.getHttpServer())
      .post('/tweets')
      .send({
        content: 'Hello World',
        screen_name: 'Samuel',
      })
      .expect(201);

    expect(res.body).toBeDefined();
    expect(res.body).toMatchObject({
      content: 'Hello World',
      screen_name: 'Samuel',
    });
  });
});
