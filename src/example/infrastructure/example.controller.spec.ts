import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './example.controller';
import { AppService } from './example.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const res = await appController.getHello();

      expect(res).toBe('Hello World!');
    });
  });

  describe('createHello1', () => {
    it('should return "Hello John Doe"', async () => {
      const res = await appController.createHello({ name: 'John Doe' });

      expect(res).toBe('Hello John Doe');
    });
  });
  // Add more tests by createHello method
  describe('createHello2', () => {
    it('should return "Hello foo"', async () => {
      const res = await appController.createHello({ name: 'foo' });

      expect(res).toBe('Hello foo');
    });
  });

  describe('createHello3', () => {
    it('should return "Hello dao"', async () => {
      const res = await appController.createHello({ name: 'dao' });

      expect(res).toBe('Hello dao');
    });
  });
});
