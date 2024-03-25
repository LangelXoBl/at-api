import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/web/example.controller';
import { ExampleRepository } from './infrastructure/persistence/example.repository';
import { ExampleService } from './application/services/example.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ExampleRepository, ExampleService],
})
export class ExampleModule {}
