import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
