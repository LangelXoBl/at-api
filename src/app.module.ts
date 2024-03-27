import { Module } from '@nestjs/common';
import { ExampleModule } from './example/example.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ExampleModule, UserModule, AuthModule, ArticlesModule],
})
export class AppModule {}
