import { Injectable } from '@nestjs/common';
import ExampleUseCase from '../application/example.useCase';
import ExampleRepository from './example.repository';

@Injectable()
export class AppService extends ExampleUseCase {
  constructor() {
    super(new ExampleRepository());
  }
}
