import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ExampleDTO } from '../../application/dtos/example.dto';
import { IExampleService } from '../../application/services/example.service.interface';
import { ExampleService } from '../../application/services/example.service';

@Controller()
export class AppController {
  constructor(
    @Inject(ExampleService)
    private readonly exampleUseCase: IExampleService,
  ) {}

  @Get()
  async getHello() {
    return this.exampleUseCase.sayHello();
  }

  @Post()
  async createHello(@Body() ExampleDto: ExampleDTO) {
    const { name } = ExampleDto;
    return this.exampleUseCase.createHello(name);
  }
}
