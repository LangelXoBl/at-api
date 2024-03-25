import { Injectable } from '@nestjs/common';
import { IExampleRepository } from '../../domain/example.repository';

@Injectable()
export class ExampleRepository implements IExampleRepository {
  talk(message: string): string {
    console.log('repository implementation');
    if (!message) throw new Error('Message is empty');
    return message;
  }
}
