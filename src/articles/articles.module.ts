import { Module } from '@nestjs/common';
import { ArticlesController } from './infrastructure/articles.controller';

@Module({
  imports: [],
  controllers: [ArticlesController],
  providers: [],
})
export class ArticlesModule {}
