import { IExampleRepository } from '../domain/example.repository';

export default class ExampleRepository implements IExampleRepository {
  talk(message: string): string {
    console.log('repository implementation');
    if (!message) throw new Error('Message is empty');
    return message;
  }
}
