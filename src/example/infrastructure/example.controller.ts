import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './example.service';
import { ExampleDTO } from './example.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return this.appService.sayHello();
  }

  @Post()
  async createHello(@Body() ExampleDto: ExampleDTO) {
    const { name } = ExampleDto;
    return this.appService.createHello(name);
  }
}
