import { Inject, Injectable } from '@nestjs/common';
import { IExampleRepository } from '../../domain/example.repository';
import { IExampleService } from './example.service.interface';
import { ExampleRepository } from '../../infrastructure/persistence/example.repository';

@Injectable()
export class ExampleService implements IExampleService {
  constructor(
    @Inject(ExampleRepository)
    private readonly exampleRepository: IExampleRepository,
  ) {}

  sayHello(): string {
    console.log('use case implementation');
    const message = 'Hello World!';
    return this.exampleRepository.talk(message);
  }

  createHello(name: string): string {
    console.log('use case implementation');
    const message = `Hello ${name}`;
    return this.exampleRepository.talk(message);
  }
}
