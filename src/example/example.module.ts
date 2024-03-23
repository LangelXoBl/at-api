import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/example.controller';
import { AppService } from './infrastructure/example.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class ExampleModule {}
