import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ExampleEntity } from '@/example/domain/example.entity';

export class ExampleDTO implements ExampleEntity {
  @ApiProperty()
  @IsString()
  name: string;
}
