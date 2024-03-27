import { Module } from '@nestjs/common';
import { AuthController } from './infrastructure/auth.controller';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
