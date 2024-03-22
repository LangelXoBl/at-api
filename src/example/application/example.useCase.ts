import { IExampleRepository } from '../domain/example.repository';
import { IExampleUseCase } from './example.usecase.i';

export default class ExampleUseCase implements IExampleUseCase {
  constructor(private readonly exampleRepository: IExampleRepository) {}

  sayHello(name: string): string {
    console.log('use case implementation');
    const message = `Hello ${name}`;
    return this.exampleRepository.talk(message);
  }
}
