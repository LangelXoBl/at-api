import { Controller, Get } from '@nestjs/common';
import { AppService } from './example.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.sayHello('luis');
  }
}
