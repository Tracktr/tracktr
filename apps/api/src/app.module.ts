import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MoviesModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
